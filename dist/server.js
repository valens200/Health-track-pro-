"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const body_parser_1 = __importDefault(require("body-parser"));
const swaggerJsdoc = require("swagger-jsdoc");
const patientRoutes = require("./src/routes/patients.routes");
const swaggerUi = require("swagger-ui-express");
const recordRoutes = require("./src/routes/records.routes");
const app = (0, express_1.default)();
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: " track application",
            version: "1.0.0",
            description: "Backend api for Internet of things",
        },
        servers: [
            {
                url: "http://localhost:4000",
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
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(`/patients`, patientRoutes);
app.use(`/records`, recordRoutes);
app.get("/swagger.json", (req, res) => {
    res.setHeader("content-Type", "Application/json");
    res.send(swaggerSpec);
});
app.use(`/swagger-docs.html`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.all("*", (req, res) => {
    return res.status(404).json({
        succes: false,
        mesage: "The reource you are trying to access is not",
    });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map