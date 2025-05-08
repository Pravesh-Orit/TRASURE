const { Inventory } = require("../models");

exports.addItem = async (req, res) => {
  const item = await Inventory.create(req.body);
  res.status(201).json(item);
};

exports.getItems = async (req, res) => {
  const items = await Inventory.findAll({ where: { providerId: req.user.id } });
  res.json(items);
};

exports.updateItem = async (req, res) => {
  await Inventory.update(req.body, { where: { id: req.params.id } });
  const updated = await Inventory.findByPk(req.params.id);
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await Inventory.destroy({ where: { id: req.params.id } });
  res.status(204).send();
};
