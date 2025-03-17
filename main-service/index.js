const axios = require("axios");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    ` 
      <h1>This is the Main service</h1>

      <h2>Main service Endpoints</h2>
      <ul>
        <li>
          <a href="http://localhost:3000/users"> Users main service</a>
        </li>
        <li>
          <a href="http://localhost:3000/products"> Products main service </a>
        </li>
      </ul>

      <h2>Micro services</h2>
      <ul>
        <li>
          <a href="http://localhost:3002/users"> Users service </a>
        </li>
        <li>
          <a href="http://localhost:3001/products"> Products service </a>
        </li>
      </ul>
    `
  );
});

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3002/users");
    res.status(200).json({
      message: "main service",
      data: response.data?.data,
    });
  } catch (error) {
    res.status(500).send({
      message: "internal error",
      error,
    });
  }
});

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    res.status(200).json({
      message: "main service",
      data: response.data?.data,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal error",
      error,
    });
  }
});

app.listen(3000, () => console.log("main app is live on 3000"));
