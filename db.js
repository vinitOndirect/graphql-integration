const { Sequelize } = require("sequelize");

const config = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "soap@123",
  database: process.env.DB_NAME || "graphql",
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
};

const sequelize = new Sequelize(config);

module.exports = sequelize;
