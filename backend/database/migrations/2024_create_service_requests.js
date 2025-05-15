module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ServiceRequests", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: Sequelize.UUID,
      breakdownType: Sequelize.STRING,
      location: Sequelize.JSONB,
      description: Sequelize.TEXT,
      status: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("ServiceRequests");
  },
};
