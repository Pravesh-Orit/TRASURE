const { Promotion } = require("../models");

exports.createPromotion = async (req, res) => {
  const promo = await Promotion.create(req.body);
  res.status(201).json(promo);
};

exports.getPromotions = async (req, res) => {
  const promos = await Promotion.findAll();
  res.json(promos);
};
