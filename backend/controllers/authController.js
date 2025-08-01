const { User, Provider, Mechanic } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const admin = require("../config/firebaseAdmin");
const bcrypt = require("bcrypt");

// Helper: fetch provider details for a user
async function getProviderDetails(userId) {
  let provider = await Provider.findOne({ where: { userId } });
  if (!provider) {
    // Defensive: ensure provider record exists for legacy/fresh
    provider = await Provider.create({
      userId,
      kycStatus: "pending",
      status: "pending",
    });
  }
  return provider;
}

// Register (Customer or Provider)
exports.register = async (req, res, next) => {
  try {
    const { name, email, phone, password, role } = req.body;
    if (!name || !phone || !password)
      return res.status(400).json({ error: "Missing required fields" });

    if (!["customer", "provider"].includes(role))
      return res.status(400).json({ error: "Invalid role" });

    const existing = await User.findOne({ where: { phone } });
    if (existing)
      return res.status(409).json({ error: "Phone already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      phone,
      password: hashed,
      role,
      isOtpVerified: false,
      otpVerifiedAt: null,
      onboardingComplete: false,
    });

    // If provider, create Provider record with pending status
    let providerData = null;
    if (role === "provider") {
      providerData = await Provider.create({
        userId: user.id,
        kycStatus: "pending",
        status: "pending",
      });
    }

    // Return minimal user + provider
    res.status(201).json({
      success: true,
      data: {
        ...user.toJSON(),
        provider: providerData ? providerData.toJSON() : undefined,
      },
      next: "verify-otp",
    });
  } catch (err) {
    next(err);
  }
};

// Login (Customer, Provider, Mechanic)
exports.login = async (req, res, next) => {
  try {
    let { phone, email, password } = req.body;
    if (!password || (!phone && !email))
      return res.status(400).json({ error: "Missing credentials" });

    // Normalize phone to E.164 (+91XXXXXXXXXX)
    if (phone) {
      phone = phone.replace(/\D/g, "");
      if (!phone.startsWith("91")) phone = "91" + phone;
      phone = "+" + phone;
    }

    const user = await User.findOne({
      where: phone ? { phone } : { email },
      attributes: { exclude: ["password"] },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    // Fetch password hash for checking (separate for security)
    const userWithPassword = await User.findOne({
      where: { id: user.id },
      attributes: ["id", "password"],
    });
    const valid = await bcrypt.compare(password, userWithPassword.password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });

    const secret = process.env.JWT_SECRET || config.jwtSecret;

    // Always fetch Provider info if provider role
    let provider = null;
    if (user.role === "provider") {
      provider = await getProviderDetails(user.id);
    }

    // OTP not verified - must send OTP
    if (!user.isOtpVerified || !user.otpVerifiedAt) {
      const token = jwt.sign({ id: user.id, role: user.role }, secret, {
        expiresIn: "1d",
      });
      return res.status(200).json({
        success: true,
        next: "verify-otp",
        token,
        user: {
          ...user.toJSON(),
          provider: provider ? provider.toJSON() : undefined,
        },
      });
    }

    // Check if OTP is stale (different day)
    const now = new Date();
    const lastVerified = new Date(user.otpVerifiedAt);
    if (
      now.getUTCDate() !== lastVerified.getUTCDate() ||
      now.getUTCMonth() !== lastVerified.getUTCMonth() ||
      now.getUTCFullYear() !== lastVerified.getUTCFullYear()
    ) {
      user.isOtpVerified = false;
      user.otpVerifiedAt = null;
      await user.save();
      const token = jwt.sign({ id: user.id, role: user.role }, secret, {
        expiresIn: "1d",
      });
      return res.status(200).json({
        success: true,
        next: "verify-otp",
        token,
        user: {
          ...user.toJSON(),
          provider: provider ? provider.toJSON() : undefined,
        },
      });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, secret, {
      expiresIn: "1d",
    });

    // Provider: Always include provider record with kycStatus
    if (user.role === "provider") {
      return res.status(200).json({
        success: true,
        token,
        user: {
          ...user.toJSON(),
          provider: provider ? provider.toJSON() : undefined,
        },
      });
    }

    // Mechanic or Customer
    return res.status(200).json({
      success: true,
      token,
      user: user.toJSON(),
    });
  } catch (err) {
    next(err);
  }
};

// OTP Verification
exports.verifyOtp = async (req, res, next) => {
  try {
    const { idToken } = req.body;
    if (!idToken) return res.status(400).json({ error: "Missing idToken" });

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const phoneNumber = decodedToken.phone_number;
    if (!phoneNumber)
      return res.status(400).json({ error: "Phone number not found in token" });

    let user = await User.findOne({ where: { phone: phoneNumber } });
    if (!user) return res.status(404).json({ error: "User not found" });

    user.isOtpVerified = true;
    user.otpVerifiedAt = new Date();
    await user.save();

    let provider = null;
    if (user.role === "provider") {
      provider = await getProviderDetails(user.id);
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token,
      user: {
        ...user.toJSON(),
        provider: provider ? provider.toJSON() : undefined,
      },
    });
  } catch (err) {
    next(err);
  }
};

// Always return provider record in getCurrentUser if applicable
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let provider = null;
    if (user.role === "provider") {
      provider = await getProviderDetails(user.id);
    }

    res.status(200).json({
      success: true,
      user: {
        ...user.toJSON(),
        provider: provider ? provider.toJSON() : undefined,
      },
    });
  } catch (error) {
    console.error("Error fetching current user:", error);
    res.status(500).json({ error: "Server error" });
  }
};
