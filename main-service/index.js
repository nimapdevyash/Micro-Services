const axios = require("axios");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    ` 
      <h1>This is the Main service</h1>
    `
  );
});

app.listen(3000, () => console.log("main app is live on 3000"));
