const { SubscriptionPlan } = require("../models");

exports.createPlan = async (req, res) => {
  const plan = await SubscriptionPlan.create(req.body);
  res.status(201).json(plan);
};

exports.getPlans = async (req, res) => {
  const plans = await SubscriptionPlan.findAll();
  res.json(plans);
};
