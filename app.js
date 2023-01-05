require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

// database
const url = process.env.URL;
mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

// router
const employeeRouter = require("./routes/employeeRoutes");

// app.use
app.use(express.json());
app.use(cors());

// get

app.get("/", (req, res) => {
  res.send("welcome");
});
// use router
app.use("/api/v1/employee", employeeRouter);

//port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
