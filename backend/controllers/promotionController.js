const { Promotion } = require("../models");

exports.createPromotion = async (req, res, next) => {
  try {
    const { title, description, discount, validFrom, validTo, target } =
      req.body;

    if (!title || !discount || !validTo) {
      return res
        .status(400)
        .json({ error: "Title, discount, and validity end date are required" });
    }

    const promo = await Promotion.create({
      title,
      description,
      discount,
      validFrom,
      validTo,
      target: target || "all",
    });

    res.status(201).json({ success: true, data: promo });
  } catch (err) {
    next(err);
  }
};

exports.getPromotions = async (req, res, next) => {
  try {
    const promos = await Promotion.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({ success: true, data: promos });
  } catch (err) {
    next(err);
  }
};
