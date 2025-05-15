module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Mechanics", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      providerId: Sequelize.UUID,
      name: Sequelize.STRING,
      skillSet: Sequelize.ARRAY(Sequelize.STRING),
      availability: Sequelize.JSONB,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Mechanics");
  },
};
