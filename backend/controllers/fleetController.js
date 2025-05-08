const { Vehicle } = require("../models");

exports.getFleet = async (req, res) => {
  const fleet = await Vehicle.findAll({ where: { corporateAccount: true } });
  res.json(fleet);
};

exports.addFleetVehicle = async (req, res) => {
  const vehicle = await Vehicle.create({ ...req.body, corporateAccount: true });
  res.status(201).json(vehicle);
};
