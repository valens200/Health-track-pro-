const express = require("express");
import * as employeesService from "../services/employees.service";

const router = express.Router();

router.post("/create", employeesService.createEmployee);

module.exports = router;
