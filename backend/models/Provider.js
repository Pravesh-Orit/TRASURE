module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define("Provider", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    kycStatus: DataTypes.STRING,
    serviceArea: DataTypes.ARRAY(DataTypes.STRING),
    tier: DataTypes.STRING,
  });
  return Provider;
};
