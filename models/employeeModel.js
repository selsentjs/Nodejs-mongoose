const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      enum: ["Developer", "Lead", "Manager"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", employeeSchema);
