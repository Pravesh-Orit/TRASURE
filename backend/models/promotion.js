module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define("Promotion", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    audience: DataTypes.STRING,
    message: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  });
  return Promotion;
};
