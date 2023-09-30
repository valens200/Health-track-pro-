"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const employee_entity_1 = require("../entities/employee.entity");
const company_entity_1 = require("../entities/company.entity");
const role_entity_1 = require("../entities/role.entity");
exports.connection = (0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "valens",
    database: "lader",
    entities: [user_entity_1.User, employee_entity_1.Employee, company_entity_1.Company, role_entity_1.Role],
    synchronize: true,
    logging: false,
});
//# sourceMappingURL=connection.js.map