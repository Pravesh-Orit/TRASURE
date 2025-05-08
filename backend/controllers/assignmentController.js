const { Assignment } = require("../models");

exports.createAssignment = async (req, res) => {
  const assignment = await Assignment.create(req.body);
  res.status(201).json(assignment);
};

exports.getAssignments = async (req, res) => {
  const assignments = await Assignment.findAll({
    where: { mechanicId: req.user.id },
  });
  res.json(assignments);
};

exports.updateAssignmentStatus = async (req, res) => {
  await Assignment.update(
    { status: req.body.status },
    { where: { id: req.params.id } }
  );
  res.status(204).send();
};
