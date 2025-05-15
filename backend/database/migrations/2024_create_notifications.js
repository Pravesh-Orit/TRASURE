module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Notifications", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: Sequelize.UUID,
      title: Sequelize.STRING,
      message: Sequelize.TEXT,
      read: { type: Sequelize.BOOLEAN, defaultValue: false },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Notifications");
  },
};
