const express = require("express");
const { sequelize, connectToDB } = require("./db");
const productRouter = require("./router");

connectToDB();
sequelize.sync();

const app = express();

app.use(express.json());

app.use("/", productRouter);

app.listen(3001, () => console.log("product is live on 3001"));
