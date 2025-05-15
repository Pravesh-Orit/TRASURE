module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Invoices", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      serviceRequestId: Sequelize.UUID,
      providerId: Sequelize.UUID,
      userId: Sequelize.UUID,
      amount: Sequelize.DECIMAL,
      markup: Sequelize.DECIMAL,
      isPaid: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Invoices");
  },
};
