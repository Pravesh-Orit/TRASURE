const { Tracking } = require("../models");

exports.updateLocation = async (req, res) => {
  const { assignmentId } = req.params;
  const location = await Tracking.upsert({ assignmentId, ...req.body });
  res.status(200).json(location);
};

exports.getLocation = async (req, res) => {
  const { assignmentId } = req.params;
  const location = await Tracking.findOne({ where: { assignmentId } });
  res.json(location);
};
