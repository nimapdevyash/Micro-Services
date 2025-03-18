const express = require("express");
const userServiceRouter = require("./routes/user");
const productServiceRouter = require("./routes/product");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("main service is live");
});

app.use("/user", userServiceRouter);
app.use("/product", productServiceRouter);

app.listen(3000, () => console.log("main app is live on 3000"));
