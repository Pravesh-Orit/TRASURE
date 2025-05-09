const { Invoice } = require("../models");

exports.getProviderInvoices = async (req, res) => {
  const invoices = await Invoice.findAll({
    where: { providerId: req.params.providerId },
  });
  res.json(invoices);
};

exports.addMarkup = async (req, res) => {
  await Invoice.update(
    { markup: req.body.markup },
    { where: { id: req.params.id } }
  );
  const updated = await Invoice.findByPk(req.params.id);
  res.json(updated);
};

exports.confirmPayment = async (req, res) => {
  await Invoice.update({ isPaid: true }, { where: { id: req.params.id } });
  res.status(204).send();
};
