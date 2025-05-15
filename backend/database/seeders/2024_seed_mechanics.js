module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Mechanics", [
      {
        id: "44444444-4444-4444-4444-444444444444",
        providerId: "33333333-3333-3333-3333-333333333333",
        name: "Ravi Kumar",
        skillSet: ["engine", "ac", "battery"],
        availability: JSON.stringify({ mon: true, tue: true, wed: true }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Mechanics", null, {});
  },
};
