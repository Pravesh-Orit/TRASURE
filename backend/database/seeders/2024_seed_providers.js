module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Providers", [
      {
        id: "33333333-3333-3333-3333-333333333333",
        name: "FastFix Garage",
        address: "Industrial Area, New Delhi",
        kycStatus: "approved",
        serviceArea: ["Delhi", "Noida"],
        tier: "Gold",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Providers", null, {});
  },
};
