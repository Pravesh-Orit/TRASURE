const { User, Provider, Mechanic } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const admin = require("../config/firebaseAdmin");
const bcrypt = require("bcrypt");

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
    if (role === "provider") {
      await Provider.create({
        userId: user.id,
        kycStatus: "pending",
        status: "pending",
      });
    }

    // After registration, frontend should redirect to OTP verification page
    res.status(201).json({ success: true, data: user, next: "verify-otp" });
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
    });
    if (!user) return res.status(404).json({ error: "User not found", user });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });

    const secret = process.env.JWT_SECRET || config.jwtSecret;
    console.log("password Secret:", user.password);

    // ...inside login and verifyOtp, after finding user...
    let providerId = null;
    if (user.role === "provider") {
      let provider = await Provider.findOne({ where: { userId: user.id } });
      if (!provider) {
        provider = await Provider.create({
          userId: user.id,
          kycStatus: "pending",
          status: "pending",
        });
      }
      providerId = provider.id;
    }
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
          providerId,
        },
      });
    }

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
          providerId,
        },
      });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, secret, {
      expiresIn: "1d",
    });

    if (user.role === "provider" && !user.onboardingComplete) {
      return res.status(200).json({
        success: true,
        next: "onboarding",
        token,
        user: {
          ...user.toJSON(),
          providerId,
        },
      });
    }

    res.json({
      success: true,
      token,
      user: {
        ...user.toJSON(),
        providerId,
      },
    });
  } catch (err) {
    next(err);
  }
};

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

    // Always fetch providerId if provider
    // ...inside login and verifyOtp, after finding user...
    let providerId = null;
    if (user.role === "provider") {
      let provider = await Provider.findOne({ where: { userId: user.id } });
      if (!provider) {
        provider = await Provider.create({
          userId: user.id,
          kycStatus: "pending",
          status: "pending",
        });
      }
      providerId = provider.id;
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
        providerId,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching current user:", error);
    res.status(500).json({ error: "Server error" });
  }
};
