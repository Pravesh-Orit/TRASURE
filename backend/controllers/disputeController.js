const { Dispute } = require("../models");

exports.createDispute = async (req, res) => {
  const dispute = await Dispute.create(req.body);
  res.status(201).json(dispute);
};

exports.resolveDispute = async (req, res) => {
  await Dispute.update(
    { status: "resolved" },
    { where: { id: req.params.id } }
  );
  res.status(204).send();
};
