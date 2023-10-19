import { Request, Response } from "express";
import db from "../database/connection";
import { CreateRecordDTO } from "../dtos/records/ceate_record-dto";

export const createRecord = async (req: Request, res: Response) => {
  const recordEntity: CreateRecordDTO = req.body;
  db.run(
    "INSERT INTO records (patient_id, body_temperature, heart_rate) VALUES (?,?,?)",
    [
      recordEntity.patientId,
      recordEntity.body_temperature,
      recordEntity.heartRate,
    ],
    (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      } else {
        return res
          .status(200)
          .json({ message: "The record  ceated successfully" });
      }
    }
  );
};

export const getAllRecords = async (req: Request, res: Response) => {
  db.run("SELECT * FROM records", (err, rows) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      console.log(rows);
      return res
        .status(200)
        .json({ message: "All records  retrived  successfully" });
    }
  });
};

export const getRecordsByPatient = async (req: Request, res: Response) => {
  const id = parseInt(req.query.id as string);
  db.run("SELECT * FROM records where patient_id = ? ", [id], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res
        .status(200)
        .json({ message: "Records retrieved successfully", records: data });
    }
  });
};
