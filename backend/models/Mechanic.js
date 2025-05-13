module.exports = (sequelize, DataTypes) => {
  const Mechanic = sequelize.define("Mechanic", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    providerId: DataTypes.UUID,
    name: DataTypes.STRING,
    skillSet: DataTypes.ARRAY(DataTypes.STRING),
    availability: DataTypes.JSONB,
  });
  return Mechanic;
};
