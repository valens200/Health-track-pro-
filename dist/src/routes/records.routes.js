"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const recordsController = __importStar(require("../controllers/records.controller"));
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
//# sourceMappingURL=records.routes.js.map