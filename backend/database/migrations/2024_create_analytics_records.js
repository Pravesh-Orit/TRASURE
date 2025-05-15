module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("AnalyticsRecords", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      eventType: Sequelize.STRING,
      source: Sequelize.STRING,
      payload: Sequelize.JSONB,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("AnalyticsRecords");
  },
};
