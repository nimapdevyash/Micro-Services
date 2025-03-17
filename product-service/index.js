const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.status(200).json({
    message: "products service",
    data: [
      { name: "some random product" },
      { name: "some random product" },
      { name: "some random product" },
    ],
  });
});

app.listen(3001, () => console.log("products is live on 3001"));
