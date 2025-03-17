const axios = require("axios");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    ` 
    <h1> THis is the Main service </h1>
    <h2> Micro services </h2>
      <ul>
       <li>
        <a href = 'http://localhost:3000/users' > Users </a>
       </li>
       <li>
        <a href = 'http://localhost:3000/products' > Products </a>  
       </li>
      </ul>
    `
  );
});

app.get("/users", async (req, res) => {
  const response = await axios.get("http://localhost:3002/users");
  res.status(200).json(response.data);
});

app.get("/products", async (req, res) => {
  const response = await axios.get("http://localhost:3001/products");
  res.status(200).json(response.data);
});

app.listen(3000, () => console.log("main app is live on 3000"));
