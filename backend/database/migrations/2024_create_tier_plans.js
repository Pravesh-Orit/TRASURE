module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TierPlans", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      responseTime: Sequelize.INTEGER,
      coverageArea: Sequelize.STRING,
      discountRate: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("TierPlans");
  },
};
