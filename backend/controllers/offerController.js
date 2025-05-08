const { Offer } = require("../models");

exports.createOffer = async (req, res) => {
  const offer = await Offer.create(req.body);
  res.status(201).json(offer);
};

exports.getOffers = async (req, res) => {
  const offers = await Offer.findAll();
  res.json(offers);
};

exports.updateOffer = async (req, res) => {
  await Offer.update(req.body, { where: { id: req.params.id } });
  const updated = await Offer.findByPk(req.params.id);
  res.json(updated);
};
