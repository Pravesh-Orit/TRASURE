module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Assignments", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      mechanicId: Sequelize.UUID,
      serviceRequestId: Sequelize.UUID,
      status: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Assignments");
  },
};
