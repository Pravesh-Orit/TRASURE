const { Provider, User } = require("../models");

// Provider onboarding (garage info, KYC docs, tier plan)
exports.onboarding = async (req, res, next) => {
  try {
    const {
      companyName,
      garageImages,
      documents,
      tier,
      serviceArea,
      location,
      availability,
      workingHours,
    } = req.body;
    const userId = req.user.id;

    const provider = await Provider.findOne({ where: { userId } });
    if (!provider) return res.status(404).json({ error: "Provider not found" });

    provider.companyName = companyName ?? provider.companyName;
    provider.tier = tier ?? provider.tier;
    provider.serviceArea = serviceArea ?? provider.serviceArea;
    provider.location = location ?? provider.location;
    provider.availability = availability ?? provider.availability;
    provider.workingHours = workingHours ?? provider.workingHours;
    provider.kycStatus = "pending";
    await provider.save();

    // Mark onboarding complete for user
    await User.update({ onboardingComplete: true }, { where: { id: userId } });

    res.json({ success: true, data: provider });
  } catch (err) {
    next(err);
  }
};

// Provider onboarding/approval status
exports.status = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const provider = await Provider.findOne({ where: { userId } });
    if (!provider) return res.status(404).json({ error: "Provider not found" });

    res.json({
      success: true,
      data: {
        kycStatus: provider.kycStatus,
        tier: provider.tier,
        status: provider.status,
        onboardingComplete: req.user.onboardingComplete,
      },
    });
  } catch (err) {
    next(err);
  }
};

// Get provider by ID (with user info)
exports.getProviderById = async (req, res, next) => {
  try {
    const provider = await Provider.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["id", "name", "email", "phone"] }],
    });
    if (!provider) return res.status(404).json({ error: "Provider not found" });

    res.status(200).json({ success: true, data: provider });
  } catch (err) {
    next(err);
  }
};

// Update provider (admin or provider self)
exports.updateProvider = async (req, res, next) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    console.log(`Updating provider with ID: `, provider);

    if (!provider) return res.status(404).json({ error: "Provider not found" });

    // Only allow certain fields to be updated
    const updatableFields = [
      "companyName",
      "tier",
      "serviceArea",
      "location",
      "availability",
      "workingHours",
      "kycStatus",
      "status",
      "address",
    ];
    for (const field of updatableFields) {
      if (req.body[field] !== undefined) {
        provider[field] = req.body[field];
      }
    }
    await provider.save();
    res.status(200).json({ success: true, data: provider });
  } catch (err) {
    next(err);
  }
};
