"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsByPatient = exports.getAllRecords = exports.createRecord = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const createRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recordEntity = req.body;
    connection_1.default.run("INSERT INTO records (patient_id, body_temperature, heartRate, frequent_sickness) VALUES (?,?,?,?)", [
        recordEntity.patientId,
        recordEntity.body_temperature,
        recordEntity.heartRate,
        recordEntity.frequent_sickness,
    ], (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        else {
            return res
                .status(200)
                .json({ message: "The record  ceated successfully" });
        }
    });
});
exports.createRecord = createRecord;
const getAllRecords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    connection_1.default.run("SELECT * FROM records", (err, rows) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        else {
            console.log(rows);
            return res
                .status(200)
                .json({ message: "All records  retrived  successfully" });
        }
    });
});
exports.getAllRecords = getAllRecords;
const getRecordsByPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.query.id);
    connection_1.default.run("SELECT * FROM records where patient_id = ? ", [id], (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            return res
                .status(200)
                .json({ message: "Records retrieved successfully", records: data });
        }
    });
});
exports.getRecordsByPatient = getRecordsByPatient;
//# sourceMappingURL=records.controller.js.map