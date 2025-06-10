"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Providers", [
      {
        id: uuidv4(),
        userId: uuidv4(),
        companyName: "Test Garage",
        kycStatus: "pending",
        tier: "basic",
        serviceArea: JSON.stringify(["Delhi", "Noida"]),
        location: JSON.stringify({ lat: 28.6, lng: 77.2 }),
        availability: JSON.stringify({ days: ["Mon", "Tue"] }),
        workingHours: JSON.stringify({ start: "09:00", end: "18:00" }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Providers", null, {});
  },
};
