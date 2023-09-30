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
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const connection_1 = require("./src/database/connection");
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes = require("./src/routes/users.routes");
const authRoutes = require("./src/routes/auth.routes");
const swaggerAutogen = require("swagger-autogen")();
const swaggerUi = require("swagger-ui-express");
// const swaggerFile = require("./swagger-output.json");
const app = (0, express_1.default)();
const port = 4000;
connection_1.connection
    .then((connectio) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Database connected successfully");
}))
    .catch((error) => {
    console.log(error);
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/doc", swaggerUi.serve);
app.use(express_1.default.json());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map