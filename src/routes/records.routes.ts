const express = require("express");
import * as recordsController from "../controllers/records.controller";

const router = express.Router();

router.post("/create", recordsController.createRecord);
router.get("/all", recordsController.getAllRecords);
router.get("/:id", recordsController.getRecordsByPatient);

module.exports = router;
