module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Inventories", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      providerId: Sequelize.UUID,
      name: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      threshold: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Inventories");
  },
};
