"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("../entities/role.entity");
const patient_entity_1 = require("../entities/patient.entity");
exports.connection = (0, typeorm_1.createConnection)({
    type: "sqlite",
    database: "./database.sqlite",
    entities: [patient_entity_1.Patient, role_entity_1.Role],
    synchronize: true,
    logging: false,
});
//# sourceMappingURL=connection.js.map