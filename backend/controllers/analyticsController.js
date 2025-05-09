const { AnalyticsRecord } = require("../models");

exports.logAnalytics = async (req, res) => {
  const record = await AnalyticsRecord.create(req.body);
  res.status(201).json(record);
};

exports.getAnalytics = async (req, res) => {
  const records = await AnalyticsRecord.findAll();
  res.json(records);
};
