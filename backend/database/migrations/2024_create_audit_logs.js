module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("AuditLogs", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      adminId: Sequelize.UUID,
      action: Sequelize.STRING,
      target: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("AuditLogs");
  },
};
