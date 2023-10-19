const express = require("express");
import * as employeeController from "../controllers/patientsController";

const router = express.Router();
/**
 * @swagger
 * /patients/create:
 *   post:
 *     summary: Create patient
 *     description: Creates a patient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               national_id:
 *                 type: string
 *                 example: 2003234849383
 *               name:
 *                 type: string
 *                 example: valens
 *               frequent_sickness:
 *                 type: string
 *                 example: none
 *
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request, ex. when providing details which are not full
 *       500:
 *         description: Internal server error
 */
router.post("/create", employeeController.createPatient);
/**
 * @swagger
 * /patients/all:
 *   get:
 *     summary: Get all patients
 *     description: Returns all patients stored in the database
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 */
router.get("/all", employeeController.getAllPatients);

module.exports = router;
