import { createConnection } from "typeorm";
import { Role } from "../entities/role.entity";
import { Patient } from "../entities/patient.entity";
export const connection = createConnection({
  type: "sqlite",
  database: "./database.sqlite",
  entities: [Patient, Role],
  synchronize: true,
  logging: false,
});
