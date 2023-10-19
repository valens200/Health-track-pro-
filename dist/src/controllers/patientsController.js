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
exports.getAllPatients = exports.createPatient = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeEntity = req.body;
    connection_1.default.run("INSERT INTO patients (national_id, name, frequent_sickness) VALUES (?,?,?)", [
        employeeEntity.nationalId,
        employeeEntity.name,
        employeeEntity.frequent_sickness,
    ], (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        else {
            return res
                .status(200)
                .json({ message: "The patient ceated successfully" });
        }
    });
});
exports.createPatient = createPatient;
const getAllPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeEntity = req.body;
    connection_1.default.run("SELECT * FROM patients", (err, rows) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        else {
            console.log(rows);
            return res
                .status(200)
                .json({ message: "The patient retrived  successfully" });
        }
    });
});
exports.getAllPatients = getAllPatients;
//# sourceMappingURL=patientsController.js.map