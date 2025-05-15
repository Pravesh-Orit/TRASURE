module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Providers", [
      {
        id: "33333333-3333-3333-3333-333333333333",
        businessName: "FastFix Garage",
        contactPerson: "Amit Sharma",
        email: "fastfix@example.com",
        phone: "9876543210",
        gstNumber: "07ABCDE1234F1Z5",
        panNumber: "ABCDE1234F",
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
