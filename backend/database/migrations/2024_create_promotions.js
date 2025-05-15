module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Promotions", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      audience: Sequelize.STRING,
      message: Sequelize.TEXT,
      startDate: Sequelize.DATE,
      endDate: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Promotions");
  },
};
