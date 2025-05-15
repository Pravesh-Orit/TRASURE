module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Appointments", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      serviceRequestId: Sequelize.UUID,
      date: Sequelize.DATE,
      timeSlot: Sequelize.STRING,
      serviceType: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Appointments");
  },
};
