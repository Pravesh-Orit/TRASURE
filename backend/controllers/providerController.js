const { Provider } = require("../models");

exports.registerProvider = async (req, res, next) => {
  try {
    const {
      businessName,
      contactPerson,
      email,
      phone,
      gstNumber,
      panNumber,
      address,
      serviceArea,
      tier,
    } = req.body;

    if (!businessName || !email || !phone) {
      return res
        .status(400)
        .json({ error: "Business name, email, and phone are required" });
    }

    const provider = await Provider.create({
      businessName,
      contactPerson,
      email,
      phone,
      gstNumber,
      panNumber,
      address,
      kycStatus: "pending",
      serviceArea: serviceArea || [],
      tier: tier || null,
    });

    res.status(201).json({ success: true, data: provider });
  } catch (err) {
    next(err);
  }
};

exports.getProviderById = async (req, res, next) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ error: "Provider not found" });

    res.status(200).json({ success: true, data: provider });
  } catch (err) {
    next(err);
  }
};

exports.updateProvider = async (req, res, next) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ error: "Provider not found" });

    await provider.update(req.body);
    res.status(200).json({ success: true, data: provider });
  } catch (err) {
    next(err);
  }
};
