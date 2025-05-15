module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("TierPlans", [
      {
        id: "66666666-6666-6666-6666-666666666666",
        name: "Basic",
        responseTime: 60,
        coverageArea: "local",
        discountRate: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("TierPlans", null, {});
  },
};
