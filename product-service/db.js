const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: "postgres",
  password: "pass",
  port: 542,
  dialect: "postgres",
});

async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("connected to DB.......");
  } catch (error) {
    console.log("error while connecting to db");
    process.exit(1);
  }
}

module.exports = {
  sequelize,
  connectToDB,
};
