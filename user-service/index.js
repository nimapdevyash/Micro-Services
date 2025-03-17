const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Users service",
    data: [
      { name: "some random user" },
      { name: "some random user" },
      { name: "some random user" },
    ],
  });
});

app.listen(3002, () => console.log("user is live on 3002"));
