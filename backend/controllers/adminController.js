const { AdminUser } = require("../models");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.getAllAdmins = async (req, res, next) => {
  try {
    const admins = await AdminUser.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json({ success: true, data: admins });
  } catch (err) {
    next(err);
  }
};

exports.createAdmin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, role } = req.body;

    const existing = await AdminUser.findOne({ where: { email } });
    if (existing)
      return res.status(409).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await AdminUser.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res
      .status(201)
      .json({ success: true, data: { id: admin.id, name, email, role } });
  } catch (err) {
    next(err);
  }
};
