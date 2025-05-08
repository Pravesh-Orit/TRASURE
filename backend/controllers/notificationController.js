const { Notification } = require("../models");

exports.getNotifications = async (req, res) => {
  const notifications = await Notification.findAll({
    where: { userId: req.user.id },
  });
  res.json(notifications);
};

exports.createNotification = async (req, res) => {
  const notification = await Notification.create(req.body);
  res.status(201).json(notification);
};

exports.markAsRead = async (req, res) => {
  const { id } = req.params;
  await Notification.update(
    { read: true },
    { where: { id, userId: req.user.id } }
  );
  res.status(204).send();
};
