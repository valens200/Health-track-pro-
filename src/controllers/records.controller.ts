import { Request, Response } from "express";
import db from "../database/connection";
import { CreatePatientDTO } from "../dtos/employees/create-patient.dto";

export const createPatient = async (req: Request, res: Response) => {
  const employeeEntity: CreatePatientDTO = req.body;
  db.run(
    "INSERT INTO records (national_id, name, frequent_sickness) VALUES (?,?,?)",
    [
      employeeEntity.nationalId,
      employeeEntity.name,
      employeeEntity.frequent_sickness,
    ],
    (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      } else {
        return res
          .status(200)
          .json({ message: "The patient ceated successfully" });
      }
    }
  );
};

export const getAllPatients = async (req: Request, res: Response) => {
  const employeeEntity: CreatePatientDTO = req.body;
  db.run("SELECT * FROM records", (err, rows) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      console.log(rows);
      return res
        .status(200)
        .json({ message: "The patient retrived  successfully" });
    }
  });
};
