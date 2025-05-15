module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Providers", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      address: Sequelize.TEXT,
      kycStatus: Sequelize.STRING,
      serviceArea: Sequelize.ARRAY(Sequelize.STRING),
      tier: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Providers");
  },
};
