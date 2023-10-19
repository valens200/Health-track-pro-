import express from "express";
import "reflect-metadata";
import bodyParser from "body-parser";
const patientRoutes = require("./src/routes/patients.routes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/patients", patientRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
