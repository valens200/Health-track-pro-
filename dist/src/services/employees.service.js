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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllEmployees = exports.deleteEmployeeById = exports.UpdateEmployee = exports.getAllPatients = exports.getEmployeByNE = exports.getEmployeeByEmail = exports.getEmployeeById = exports.createEmployee = exports.initializeRepository = void 0;
const not_found_exception_1 = require("../exceptions/not-found.exception");
const EVisibibility_enum_1 = require("../enums/EVisibibility.enum");
const helperFunctions_1 = require("../utils/helperFunctions");
const patient_entity_1 = require("../entities/patient.entity");
let patientsRepo;
let user;
let users = [];
const initializeRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    patientsRepo = yield (0, helperFunctions_1.initializeRepositories)("patient");
});
exports.initializeRepository = initializeRepository;
const createEmployee = (employeeEntity) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    let employee = yield (0, exports.getEmployeByNE)(employeeEntity.nationalId);
    let employeeToCreate = new patient_entity_1.Patient(employeeEntity.name);
    return yield patientsRepo.find({});
});
exports.createEmployee = createEmployee;
const getEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield patientsRepo.findOne({ where: { id: id } });
    if (!user)
        throw new not_found_exception_1.NotFoundException("The user with the provided id is not found");
    return user;
});
exports.getEmployeeById = getEmployeeById;
const getEmployeeByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield patientsRepo.findOne({ where: { email: email } });
    if (!user)
        throw new not_found_exception_1.NotFoundException("The user with the provided id is not found");
    return user;
});
exports.getEmployeeByEmail = getEmployeeByEmail;
const getEmployeByNE = (ne) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield patientsRepo.findOne({ where: { nationalId: ne } });
    return user;
});
exports.getEmployeByNE = getEmployeByNE;
const getAllPatients = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    return yield patientsRepo.find({});
});
exports.getAllPatients = getAllPatients;
const UpdateEmployee = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.UpdateEmployee = UpdateEmployee;
const deleteEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield (0, exports.getEmployeeById)(id);
    user.visibility = EVisibibility_enum_1.EVisibility[EVisibibility_enum_1.EVisibility.HIDDEN];
    return yield patientsRepo.save(user);
});
exports.deleteEmployeeById = deleteEmployeeById;
const deleteAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    users = yield patientsRepo.find({});
    users.forEach((user) => __awaiter(void 0, void 0, void 0, function* () {
        user.visibility = EVisibibility_enum_1.EVisibility[EVisibibility_enum_1.EVisibility.HIDDEN];
        yield patientsRepo.save(user);
    }));
});
exports.deleteAllEmployees = deleteAllEmployees;
//# sourceMappingURL=employees.service.js.map