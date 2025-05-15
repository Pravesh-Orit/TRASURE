module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Disputes", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      serviceRequestId: Sequelize.UUID,
      reason: Sequelize.TEXT,
      status: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Disputes");
  },
};
