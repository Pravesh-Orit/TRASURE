const { AuditLog } = require("../models");

exports.logAction = async (req, res) => {
  const log = await AuditLog.create({
    adminId: req.user.id,
    action: req.body.action,
    target: req.body.target,
  });
  res.status(201).json(log);
};

exports.getLogs = async (req, res) => {
  const logs = await AuditLog.findAll();
  res.json(logs);
};
