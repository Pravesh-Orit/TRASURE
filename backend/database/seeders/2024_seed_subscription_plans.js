module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("SubscriptionPlans", [
      {
        id: "77777777-7777-7777-7777-777777777777",
        name: "Gold Membership",
        price: 999,
        durationDays: 30,
        features: JSON.stringify({
          prioritySupport: true,
          freeServiceCalls: 3,
        }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("SubscriptionPlans", null, {});
  },
};
