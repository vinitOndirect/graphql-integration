const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdby: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Todo;
