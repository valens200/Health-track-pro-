import { createConnection } from "typeorm";
import { User } from "../entities/user.entity";
export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "valens",
  database: "lader",
  entities: [User],
  synchronize: true,
  logging: false,
});
