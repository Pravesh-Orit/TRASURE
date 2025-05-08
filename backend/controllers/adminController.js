const { AdminUser } = require("../models");

exports.getAllAdmins = async (req, res) => {
  const admins = await AdminUser.findAll();
  res.json(admins);
};

exports.createAdmin = async (req, res) => {
  const admin = await AdminUser.create(req.body);
  res.status(201).json(admin);
};
