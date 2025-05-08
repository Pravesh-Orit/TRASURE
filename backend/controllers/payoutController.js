const { Payout } = require("../models");

exports.getPayouts = async (req, res) => {
  const payouts = await Payout.findAll({ where: { providerId: req.user.id } });
  res.json(payouts);
};

exports.schedulePayout = async (req, res) => {
  const payout = await Payout.create(req.body);
  res.status(201).json(payout);
};
