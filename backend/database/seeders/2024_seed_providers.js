"use strict";
const { v4: uuidv4 } = require("uuid");
const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Providers", [
      {
        id: uuidv4(),
        userId: uuidv4(),
        companyName: "Test Garage",
        kycStatus: "pending",
        tier: "basic",

        // ✅ ARRAY (string) — not stringified
        serviceArea: ["Delhi", "Noida"],

        // ✅ JSONB fields must be stringified
        location: JSON.stringify({ lat: 28.6, lng: 77.2 }),
        availability: JSON.stringify({ days: ["Mon", "Tue"] }),
        workingHours: JSON.stringify({ start: "09:00", end: "18:00" }),

        // ✅ Explicitly cast empty array (PostgreSQL requirement)
        garageImages: Sequelize.literal("ARRAY[]::VARCHAR[]"),

        // ✅ Bank Details
        accountHolderName: "Raj Sharma",
        accountNumber: "12345678901",
        ifscCode: "HDFC0001234",
        bankName: "HDFC Bank",
        branchName: "Noida Sector 18",
        upiId: "rajsharma@hdfcbank",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Providers", null, {});
  },
};
