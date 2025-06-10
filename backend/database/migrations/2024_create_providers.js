"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("Providers", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kycStatus: {
        type: DataTypes.ENUM("pending", "verified", "rejected"),
        defaultValue: "pending",
      },
      tier: DataTypes.STRING,
      serviceArea: DataTypes.ARRAY(DataTypes.STRING),
      location: DataTypes.JSONB,
      availability: DataTypes.JSONB,
      workingHours: DataTypes.JSONB,
      garageImages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Providers");
  },
};
