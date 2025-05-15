module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tickets", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: Sequelize.UUID,
      subject: Sequelize.STRING,
      status: Sequelize.STRING,
      priority: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Tickets");
  },
};
