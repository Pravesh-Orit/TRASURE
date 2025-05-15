module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Vehicles", [
      {
        id: "22222222-2222-2222-2222-222222222222",
        userId: "11111111-1111-1111-1111-111111111111",
        make: "Honda",
        model: "Civic",
        year: 2020,
        registrationNumber: "DL10XYZ1234",
        corporateAccount: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};
