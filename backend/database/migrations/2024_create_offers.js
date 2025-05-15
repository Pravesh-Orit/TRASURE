module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Offers", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      providerId: Sequelize.UUID,
      code: Sequelize.STRING,
      description: Sequelize.TEXT,
      eligibility: Sequelize.JSONB,
      active: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Offers");
  },
};
