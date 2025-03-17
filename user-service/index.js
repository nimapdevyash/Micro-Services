const express = require("express");
const { sequelize, connectToDB } = require("./db");
const userRouter = require("./router");

connectToDB();
sequelize.sync({ force: true });

const app = express();

app.use(express.json());

app.use("/", userRouter);

app.listen(3002, () => console.log("user is live on 3002"));
