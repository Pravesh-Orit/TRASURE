module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Vehicles", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: Sequelize.UUID,
      make: Sequelize.STRING,
      model: Sequelize.STRING,
      year: Sequelize.INTEGER,
      registrationNumber: Sequelize.STRING,
      corporateAccount: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Vehicles");
  },
};
