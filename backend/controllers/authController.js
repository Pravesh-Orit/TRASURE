const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { Op } = require("sequelize");
const admin = require("../config/firebaseAdmin");
const allConfig = require("../config/config");
const env = process.env.NODE_ENV || "development";
const config = allConfig[env];
exports.register = async (req, res, next) => {
  try {
    const { name, email, phone, password, role } = req.body;

    const existing = await User.findOne({
      where: { [Op.or]: [{ email }, { phone }] },
    });
    if (existing)
      return res.status(409).json({ error: "User already exists." });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      phone,
      password: hash,
      role: role || "customer",
    });

    res
      .status(201)
      .json({ success: true, data: { id: user.id, name, email, phone } });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { emailOrPhone, password } = req.body;
    if (!emailOrPhone || !password) {
      return res
        .status(400)
        .json({ error: "Email/Phone and password are required" });
    }

    const user = await User.findOne({
      where: { [Op.or]: [{ email: emailOrPhone }, { phone: emailOrPhone }] },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn || "1d",
    });
    console.log("JWT Secret in login:", config.jwtSecret);
    console.log("JWT Token in login:", token);

    res.json({
      success: true,
      token,
      user: { id: user.id, name: user.name, role: user.role },
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyOtp = async (req, res, next) => {
  try {
    const { idToken } = req.body;
    if (!idToken) {
      return res.status(400).json({ error: "Missing idToken" });
    }

    // Verify the token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const phoneNumber = decodedToken.phone_number;

    if (!phoneNumber) {
      return res.status(400).json({ error: "Phone number not found in token" });
    }

    // Check if user exists in DB
    let user = await User.findOne({ where: { phone: phoneNumber } });

    if (!user) {
      // Auto-register user if not exists
      user = await User.create({
        phone: phoneNumber,
        name: "New User",
        role: "customer",
      });
    }

    // Create JWT token for app login
    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      token,
      user: { id: user.id, phone: user.phone, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};

exports.verifyOtp = async (req, res, next) => {
  try {
    const { idToken } = req.body;
    if (!idToken) {
      return res.status(400).json({ error: "Missing idToken" });
    }

    // Verify the token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const phoneNumber = decodedToken.phone_number;

    if (!phoneNumber) {
      return res.status(400).json({ error: "Phone number not found in token" });
    }

    // Check if user exists in DB
    let user = await User.findOne({ where: { phone: phoneNumber } });

    if (!user) {
      // Auto-register user if not exists
      user = await User.create({
        phone: phoneNumber,
        name: "New User",
        role: "customer",
      });
    }

    // Create JWT token for app login
    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      token,
      user: { id: user.id, phone: user.phone, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};
