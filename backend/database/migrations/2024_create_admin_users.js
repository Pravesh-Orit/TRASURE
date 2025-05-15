module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("AdminUsers", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      role: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("AdminUsers");
  },
};
