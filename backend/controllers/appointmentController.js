const { Appointment } = require("../models");

exports.bookAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAppointmentsByRequest = async (req, res) => {
  const { serviceRequestId } = req.params;
  const appointments = await Appointment.findAll({
    where: { serviceRequestId },
  });
  res.json(appointments);
};
