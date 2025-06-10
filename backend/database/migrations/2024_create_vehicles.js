module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Vehicles", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
      },
      make: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      registrationNumber: {
        type: Sequelize.STRING,
      },
      fuelType: {
        type: Sequelize.STRING, // ✅ now it's correct
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Vehicles");
  },
};
