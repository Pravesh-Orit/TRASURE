module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("AdminUsers", [
      {
        id: "55555555-5555-5555-5555-555555555555",
        name: "Super Admin",
        email: "admin@trasure.com",
        password: "hashed-admin-password",
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("AdminUsers", null, {});
  },
};
