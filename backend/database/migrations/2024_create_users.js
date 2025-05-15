module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      email: { type: Sequelize.STRING, unique: true },
      phone: { type: Sequelize.STRING, unique: true },
      password: Sequelize.STRING,
      role: Sequelize.STRING,
      creditLimit: Sequelize.DECIMAL,
      bnplEnabled: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Users");
  },
};
