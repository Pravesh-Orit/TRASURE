const { Vehicle } = require("../models");

exports.addVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create({ ...req.body, userId: req.user.id });
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getVehicles = async (req, res) => {
  const vehicles = await Vehicle.findAll({ where: { userId: req.user.id } });
  res.json(vehicles);
};

exports.updateVehicle = async (req, res) => {
  const { id } = req.params;
  await Vehicle.update(req.body, { where: { id, userId: req.user.id } });
  const updated = await Vehicle.findByPk(id);
  res.json(updated);
};

exports.deleteVehicle = async (req, res) => {
  const { id } = req.params;
  await Vehicle.destroy({ where: { id, userId: req.user.id } });
  res.status(204).send();
};
