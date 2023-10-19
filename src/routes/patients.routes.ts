const express = require("express");
import * as employeeController from "../controllers/patientsController";

const router = express.Router();

router.post("/create", employeeController.createPatient);
router.get("/all", employeeController.getAllPatients);

module.exports = router;
