const { ServiceRequest } = require("../models");

exports.createRequest = async (req, res) => {
  const request = await ServiceRequest.create({
    ...req.body,
    userId: req.user.id,
    status: "new",
  });
  res.status(201).json(request);
};

exports.getUserRequests = async (req, res) => {
  const requests = await ServiceRequest.findAll({
    where: { userId: req.user.id },
  });
  res.json(requests);
};
