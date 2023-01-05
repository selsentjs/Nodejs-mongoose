require("dotenv").config()
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to node js");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
