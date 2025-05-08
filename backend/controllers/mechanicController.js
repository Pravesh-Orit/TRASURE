const { Mechanic } = require("../models");

exports.addMechanic = async (req, res) => {
  const mechanic = await Mechanic.create(req.body);
  res.status(201).json(mechanic);
};

exports.getMechanics = async (req, res) => {
  const mechanics = await Mechanic.findAll({
    where: { providerId: req.user.id },
  });
  res.json(mechanics);
};

exports.updateMechanic = async (req, res) => {
  await Mechanic.update(req.body, { where: { id: req.params.id } });
  const updated = await Mechanic.findByPk(req.params.id);
  res.json(updated);
};

exports.deleteMechanic = async (req, res) => {
  await Mechanic.destroy({ where: { id: req.params.id } });
  res.status(204).send();
};
