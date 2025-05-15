module.exports = (sequelize, DataTypes) => {
  const AdminUser = sequelize.define("AdminUser", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return AdminUser;
};
