module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("BNPLRequests", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: Sequelize.UUID,
      amount: Sequelize.DECIMAL,
      status: Sequelize.STRING,
      approvedBy: Sequelize.UUID,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("BNPLRequests");
  },
};
