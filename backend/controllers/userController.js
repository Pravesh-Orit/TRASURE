const { User } = require("../models");

exports.getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.user.id } });
    const updated = await User.findByPk(req.user.id);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
