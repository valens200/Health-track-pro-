import express, { Request, Response } from "express";
import "reflect-metadata";
import bodyParser from "body-parser";
const swaggerJsdoc = require("swagger-jsdoc");
const patientRoutes = require("./src/routes/patients.routes");
const swaggerUi = require("swagger-ui-express");
const recordRoutes = require("./src/routes/records.routes");

const app = express();
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: " Health track pro+ application",
      version: "1.0.0",
      description: "Backend api for Internet of things",
    },
    servers: [
      {
        url: "http://194.163.167.131:3200",
        // url: "http://localhost:4000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "Bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/patients.routes.ts", "./src/routes/records.routes.ts"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(`/patients`, patientRoutes);
app.use(`/records`, recordRoutes);
app.get("/swagger.json", (req: Request, res: Response) => {
  res.setHeader("content-Type", "Application/json");
  res.send(swaggerSpec);
});

app.use(`/swagger-docs.html`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.all("*", (req: Request, res: Response) => {
  return res.status(404).json({
    succes: false,
    mesage: "The reource you are trying to access is not",
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
