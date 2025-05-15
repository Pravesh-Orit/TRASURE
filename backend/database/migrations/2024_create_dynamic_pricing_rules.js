module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DynamicPricingRules", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      zone: Sequelize.STRING,
      multiplier: Sequelize.FLOAT,
      activeTime: Sequelize.RANGE(Sequelize.DATE),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("DynamicPricingRules");
  },
};
