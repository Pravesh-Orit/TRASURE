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
        allowNull: true,
      },
      kycStatus: {
        type: DataTypes.ENUM("pending", "verified", "rejected"),
        defaultValue: "pending",
      },
      rejectionReason: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tier: DataTypes.STRING,
      serviceArea: DataTypes.ARRAY(DataTypes.STRING),
      location: DataTypes.JSONB,
      serviceCategories: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: [],
      },
      availability: DataTypes.JSONB,
      workingHours: DataTypes.JSONB,
      garageImages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      // ✅ New bank detail fields
      accountHolderName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      accountNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ifscCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bankName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      branchName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      upiId: {
        type: DataTypes.STRING,
        allowNull: true,
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
