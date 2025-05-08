const { SLALog } = require("../models");

exports.logSLAEvent = async (req, res) => {
  const log = await SLALog.create(req.body);
  res.status(201).json(log);
};

exports.getSLAStats = async (req, res) => {
  const logs = await SLALog.findAll({ where: { providerId: req.user.id } });
  res.json(logs);
};
