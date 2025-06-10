module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define("Provider", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    companyName: DataTypes.STRING,
    kycStatus: {
      type: DataTypes.ENUM("pending", "verified", "rejected"),
      defaultValue: "pending",
    },
    tier: DataTypes.STRING,
    serviceArea: DataTypes.ARRAY(DataTypes.STRING),
    location: DataTypes.JSONB,
    availability: DataTypes.JSONB,
    workingHours: DataTypes.JSONB,
    garageImages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  });

  Provider.associate = (models) => {
    Provider.belongsTo(models.User, { foreignKey: "userId" });
    Provider.hasMany(models.Mechanic, { foreignKey: "providerId" });
    Provider.hasMany(models.ServiceRequest, { foreignKey: "providerId" });
  };

  return Provider;
};
