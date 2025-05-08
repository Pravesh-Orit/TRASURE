const { TierPlan } = require("../models");

exports.createPlan = async (req, res) => {
  const plan = await TierPlan.create(req.body);
  res.status(201).json(plan);
};

exports.getPlans = async (req, res) => {
  const plans = await TierPlan.findAll();
  res.json(plans);
};

exports.updatePlan = async (req, res) => {
  await TierPlan.update(req.body, { where: { id: req.params.id } });
  const updated = await TierPlan.findByPk(req.params.id);
  res.json(updated);
};
