const { User, Provider, Mechanic } = require("../models");

// List all users (customers, providers, mechanics)
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["createdAt", "DESC"]],
    });
    res.json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};

// List all mechanics and their providers
exports.getAllMechanics = async (req, res, next) => {
  try {
    const mechanics = await Mechanic.findAll({
      include: [{ model: Provider, attributes: ["id", "companyName"] }],
    });
    res.json({ success: true, data: mechanics });
  } catch (err) {
    next(err);
  }
};

// Approve or reject provider KYC
exports.approveProvider = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // "approved" or "rejected"
    const provider = await Provider.findByPk(id);
    if (!provider) return res.status(404).json({ error: "Provider not found" });

    provider.status = status;
    provider.kycStatus = status === "approved" ? "verified" : "rejected";
    await provider.save();

    res.json({ success: true, data: provider });
  } catch (err) {
    next(err);
  }
};

// List all providers + KYC status
exports.getAllProviders = async (req, res, next) => {
  try {
    const providers = await Provider.findAll({
      include: [{ model: User, attributes: ["name", "email", "phone"] }],
      order: [["createdAt", "DESC"]],
    });
    res.json({ success: true, data: providers });
  } catch (err) {
    next(err);
  }
};
