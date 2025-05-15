module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Chats", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      senderId: Sequelize.UUID,
      receiverId: Sequelize.UUID,
      assignmentId: Sequelize.UUID,
      message: Sequelize.TEXT,
      messageType: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Chats");
  },
};
