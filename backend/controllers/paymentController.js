const { Payment } = require("../models");

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create({ ...req.body, userId: req.user.id });
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserPayments = async (req, res) => {
  const payments = await Payment.findAll({ where: { userId: req.user.id } });
  res.json(payments);
};
