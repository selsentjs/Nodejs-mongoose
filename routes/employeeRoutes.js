const express = require("express");
const router = express.Router();
const {
  getAllEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");

router.route("/").get(getAllEmployees);
router.route("/:id").get(getSingleEmployee);
router.route("/").post(createEmployee);
router.route("/:id").put(updateEmployee);
router.route("/:id").delete(deleteEmployee);

module.exports = router;
