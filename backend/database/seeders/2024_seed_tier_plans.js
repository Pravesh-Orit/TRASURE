"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("TierPlans", [
      {
        id: uuidv4(),
        name: "Basic",
        price: 0,
        durationDays: 30,
        features: JSON.stringify(["Standard Support", "Basic Listing"]),
        responseTime: 48,
        coverageArea: "City",
        discountRate: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Premium",
        price: 499,
        durationDays: 30,
        features: JSON.stringify([
          "Priority Support",
          "Featured Listing",
          "Analytics",
        ]),
        responseTime: 12,
        coverageArea: "State",
        discountRate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TierPlans", null, {});
  },
};
