module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SLALogs", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      providerId: Sequelize.UUID,
      assignmentId: Sequelize.UUID,
      status: Sequelize.STRING,
      timestamp: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("SLALogs");
  },
};
