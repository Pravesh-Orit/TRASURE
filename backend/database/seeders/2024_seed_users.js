module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: "11111111-1111-1111-1111-111111111111",
        name: "John Doe",
        email: "john@example.com",
        phone: "9876543210",
        password: "hashed-password",
        role: "customer",
        creditLimit: 10000,
        bnplEnabled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
