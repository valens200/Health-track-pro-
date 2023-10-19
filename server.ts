import express from "express";
import "reflect-metadata";
import { connection } from "./src/database/connection";
import bodyParser from "body-parser";
const userRoutes = require("./src/routes/users.routes");
const patientRoutes = require("./src/routes/patients.routes");

const app = express();
const port = 4000;

connection
  .then(async (connectio) => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/patients", patientRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
