const { BNPLRequest } = require("../models");

exports.requestBNPL = async (req, res) => {
  try {
    const request = await BNPLRequest.create({
      ...req.body,
      userId: req.user.id,
      status: "pending",
    });
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBNPLStatus = async (req, res) => {
  const request = await BNPLRequest.findOne({ where: { userId: req.user.id } });
  res.json(request);
};
