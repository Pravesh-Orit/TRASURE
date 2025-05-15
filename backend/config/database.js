const { Sequelize } = require("sequelize");
const allConfig = require("./config");
// Select config based on NODE_ENV, default to 'development'
const env = process.env.NODE_ENV || "development";
const config = allConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = sequelize;
