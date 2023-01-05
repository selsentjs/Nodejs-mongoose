const Client = require("../models/employeeModel");

const getAllEmployees = async (req, res) => {
  try {
    const ListEmployees = await Client.find();
    res.status(200).json({ ListEmployees });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getSingleEmployee = async (req, res) => {
  try {
    const { id: EmployeeID } = req.params;
    const singleEmployee = await Client.findOne({ _id: EmployeeID });
    if (!singleEmployee) {
      res.send("no employee with id");
    }
    res.status(200).json({ singleEmployee });
  } catch (err) {
    res.send(err);
  }
};

const createEmployee = async (req, res) => {
  const newEmployee = new Client({
    name: req.body.name,
    designation: req.body.designation,
  });
  try {
    const result = await newEmployee.save();
    res.status(201).json(result);
  } catch (err) {
    res.send(err);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id: EmployeeId } = req.params;
    const employee = await Client.findOneAndUpdate({ _id: EmployeeId });
    employee.name = req.body.name;
    employee.designation = req.body.designation;

    const result = await employee.save();
    if (!employee) {
      res.send("no employee with id");
    }
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
};

const deleteEmployee = async (req, res) => {
  res.send("delete employee");
};

module.exports = {
  getAllEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
