require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "trasure_db",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "password",
  jwtSecret: process.env.JWT_SECRET || "supersecretkey",
  stripeSecret: process.env.STRIPE_SECRET_KEY || "",
  socketPort: process.env.SOCKET_PORT || 5001,
};
