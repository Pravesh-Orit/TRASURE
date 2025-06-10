"use strict";
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const adminUserId = uuidv4();
    await queryInterface.bulkInsert("Users", [
      {
        id: adminUserId,
        name: "Super Admin",
        email: "admin@trasure.com",
        phone: "9999999999",
        password: "admin@62689",
        role: "admin",
        isOtpVerified: true,
        status: "active",
        onboardingComplete: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("AdminUsers", [
      {
        id: uuidv4(),
        userId: adminUserId,
        adminLevel: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AdminUsers", null, {});
    await queryInterface.bulkDelete(
      "Users",
      { email: "admin@trasure.com" },
      {}
    );
  },
};
