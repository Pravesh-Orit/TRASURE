module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SubscriptionPlans", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL,
      durationDays: Sequelize.INTEGER,
      features: Sequelize.JSONB,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("SubscriptionPlans");
  },
};
