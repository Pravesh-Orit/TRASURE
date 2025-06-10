module.exports = (sequelize, DataTypes) => {
  const Mechanic = sequelize.define("Mechanic", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    providerId: DataTypes.UUID,
    skillSet: DataTypes.ARRAY(DataTypes.STRING),
    availability: DataTypes.JSONB,
    assignedJobs: DataTypes.ARRAY(DataTypes.UUID),
  });

  Mechanic.associate = (models) => {
    Mechanic.belongsTo(models.User, { foreignKey: "userId" });
    Mechanic.belongsTo(models.Provider, { foreignKey: "providerId" });
  };

  return Mechanic;
};
