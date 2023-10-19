const express = require("express");
import * as recordsController from "../controllers/records.controller";

const router = express.Router();

/**
 * @swagger
 * /records/create:
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
 *               patient_id:
 *                 type: number
 *                 example: 2
 *               name:
 *                 type: string
 *                 example: valens
 *               body_temperature:
 *                 type: number
 *                 example: 3.4
 *               heart_rate:
 *                 type: number
 *                 example: 4.5
 *
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request, ex. when providing details which are not full
 *       500:
 *         description: Internal server error
 */
router.post("/create", recordsController.createRecord);
/**
 * @swagger
 * /records/all:
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
router.get("/all", recordsController.getAllRecords);

/**
 * @swagger
 * /records/{id}:
 *   get:
 *     summary: Get incident by status
 *     description: Returns an company by status
 *     parameters:
 *       - in: path
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         description: Example 647de6688d6cf45329f03206
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Notfound
 *       400:
 *         description: bad request when the provided status is a number
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 */
router.get("/:id", recordsController.getRecordsByPatient);

module.exports = router;
