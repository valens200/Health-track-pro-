import { createConnection } from "typeorm";
import { User } from "../entities/user.entity";
import { Employee } from "../entities/employee.entity";
import { Company } from "../entities/company.entity";
import { Role } from "../entities/role.entity";
export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "valens",
  database: "lader",
  entities: [User, Employee, Company, Role],
  synchronize: true,
  logging: false,
});
