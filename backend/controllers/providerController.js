const { Provider } = require("../models");

exports.registerProvider = async (req, res) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(201).json(provider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProviderById = async (req, res) => {
  const { id } = req.params;
  const provider = await Provider.findByPk(id);
  res.json(provider);
};

exports.updateProvider = async (req, res) => {
  await Provider.update(req.body, { where: { id: req.params.id } });
  const updated = await Provider.findByPk(req.params.id);
  res.json(updated);
};
