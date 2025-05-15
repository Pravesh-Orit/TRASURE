require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "trasure_db",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    jwtSecret: process.env.JWT_SECRET || "default_jwt_secret",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
    stripeSecret: process.env.PAYMENT_SECRET_KEY || "default_stripe_secret",
    socketPort: process.env.SOCKET_PORT || 5001,
  },
  test: {
    username: "postgres",
    password: "",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    stripeSecret: process.env.PAYMENT_SECRET_KEY || "default_stripe_secret",
    socketPort: process.env.SOCKET_PORT || 5001,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    stripeSecret: process.env.PAYMENT_SECRET_KEY || "default_stripe_secret",
    socketPort: process.env.SOCKET_PORT || 5001,
  },
};

// module.exports = {
//   port: process.env.PORT || 5000,
//   host: process.env.DB_HOST || "localhost",
//   database: process.env.DB_NAME || "trasure_db",
//   username: process.env.DB_USER || "postgres",
//   password: process.env.DB_PASSWORD || "pravesh@62689",
//   dialect: "postgres",
//   jwtSecret:
//     process.env.JWT_SECRET || "n1q+jL+bzBPqBqawlhMcacf3wwv08SyjlbXjj2niBFY=",
//   stripeSecret: process.env.STRIPE_SECRET_KEY || "",
//   socketPort: process.env.SOCKET_PORT || 5001,
// };
