const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const User = sequelize.define("User", {
  username: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    validate: {
      min: {
        args: 18,
        msg: "childrens are not allowed",
      },
    },
    allowNull: false,
  },
});

module.exports = User;
