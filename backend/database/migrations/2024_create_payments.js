module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Payments", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: Sequelize.UUID,
      method: Sequelize.STRING,
      amount: Sequelize.DECIMAL,
      status: Sequelize.STRING,
      transactionId: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Payments");
  },
};
