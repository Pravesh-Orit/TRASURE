const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const config = require("../config/config");

exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, password: hash });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const user = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ email: emailOrPhone }, { phone: emailOrPhone }],
      },
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, {
      expiresIn: "7d",
    });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  // For now, simulate OTP verification
  res.json({ message: "OTP verified successfully" });
};
