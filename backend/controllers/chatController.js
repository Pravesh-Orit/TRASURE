const { Chat } = require("../models");

exports.getChatMessages = async (req, res) => {
  const { assignmentId } = req.params;
  const messages = await Chat.findAll({ where: { assignmentId } });
  res.json(messages);
};

exports.sendMessage = async (req, res) => {
  const message = await Chat.create(req.body);
  res.status(201).json(message);
};
