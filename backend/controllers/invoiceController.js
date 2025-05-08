const { Invoice } = require("../models");

exports.createInvoice = async (req, res) => {
  const invoice = await Invoice.create(req.body);
  res.status(201).json(invoice);
};

exports.getInvoicesByUser = async (req, res) => {
  const invoices = await Invoice.findAll({ where: { userId: req.user.id } });
  res.json(invoices);
};
