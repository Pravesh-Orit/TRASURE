module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CrossSellAds", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: Sequelize.STRING,
      imageUrl: Sequelize.STRING,
      link: Sequelize.STRING,
      impressions: Sequelize.INTEGER,
      clicks: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("CrossSellAds");
  },
};
