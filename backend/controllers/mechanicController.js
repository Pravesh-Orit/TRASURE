const { Mechanic } = require("../models");

exports.addMechanic = async (req, res, next) => {
  try {
    const { name, skillSet, availability } = req.body;

    if (!name || !skillSet) {
      return res.status(400).json({ error: "Name and skillSet are required" });
    }

    const mechanic = await Mechanic.create({
      providerId: req.user.id,
      name,
      skillSet,
      availability,
    });

    res.status(201).json({ success: true, data: mechanic });
  } catch (error) {
    next(error);
  }
};

exports.getMechanics = async (req, res, next) => {
  try {
    const mechanics = await Mechanic.findAll({
      where: { providerId: req.user.id },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({ success: true, data: mechanics });
  } catch (error) {
    next(error);
  }
};

exports.updateMechanic = async (req, res, next) => {
  try {
    const { id } = req.params;

    const mechanic = await Mechanic.findByPk(id);
    if (!mechanic || mechanic.providerId !== req.user.id) {
      return res
        .status(404)
        .json({ error: "Mechanic not found or unauthorized" });
    }

    await mechanic.update(req.body);
    res.status(200).json({ success: true, data: mechanic });
  } catch (error) {
    next(error);
  }
};

exports.deleteMechanic = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Mechanic.destroy({
      where: { id, providerId: req.user.id },
    });

    if (!deleted) {
      return res.status(404).json({ error: "Mechanic not found" });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
