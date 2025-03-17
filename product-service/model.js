const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
