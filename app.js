require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const url = process.env.URL;

const app = express();
mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
const cors = require("cors");
// router
const employeeRouter = require("./routes/employeeRoutes");

app.use(express.json());
app.use(cors());

// use router
app.use("/api/v1/employee", employeeRouter);

//port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
