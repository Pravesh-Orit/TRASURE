module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Payouts", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      providerId: Sequelize.UUID,
      amount: Sequelize.DECIMAL,
      status: Sequelize.STRING,
      scheduledDate: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Payouts");
  },
};
