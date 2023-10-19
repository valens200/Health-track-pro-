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
exports.deleteAllEmployees = exports.deleteEmployeeById = exports.UpdateEmployee = exports.getAllEmployees = exports.getEmployeByEmail = exports.getEmployeeByEmail = exports.getEmployeeById = exports.createEmployee = exports.initializeRepository = void 0;
const not_found_exception_1 = require("../exceptions/not-found.exception");
const EVisibibility_enum_1 = require("../enums/EVisibibility.enum");
const helperFunctions_1 = require("../utils/helperFunctions");
const patient_entity_1 = require("../entities/patient.entity");
let employeeRepo;
let user;
let users = [];
const initializeRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    employeeRepo = yield (0, helperFunctions_1.initializeRepositories)("employee");
});
exports.initializeRepository = initializeRepository;
const createEmployee = (employeeEntity) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    let employee = yield (0, exports.getEmployeByEmail)(employeeEntity.name);
    if (employee)
        throw new not_found_exception_1.NotFoundException("That employee is already registered");
    let employeeToCreate = new patient_entity_1.Patient(employeeEntity.name);
    // employeeToCreate.password = await utilsService.hashString(
    //   employeeToCreate.password
    // );
    return yield employeeRepo.save(employeeToCreate);
});
exports.createEmployee = createEmployee;
const getEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield employeeRepo.findOne({ where: { id: id } });
    if (!user)
        throw new not_found_exception_1.NotFoundException("The user with the provided id is not found");
    return user;
});
exports.getEmployeeById = getEmployeeById;
const getEmployeeByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield employeeRepo.findOne({ where: { email: email } });
    if (!user)
        throw new not_found_exception_1.NotFoundException("The user with the provided id is not found");
    return user;
});
exports.getEmployeeByEmail = getEmployeeByEmail;
const getEmployeByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield employeeRepo.findOne({ where: { email: email } });
    return user;
});
exports.getEmployeByEmail = getEmployeByEmail;
const getAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    return yield employeeRepo.find({});
});
exports.getAllEmployees = getAllEmployees;
const UpdateEmployee = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.UpdateEmployee = UpdateEmployee;
const deleteEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    user = yield (0, exports.getEmployeeById)(id);
    user.visibility = EVisibibility_enum_1.EVisibility[EVisibibility_enum_1.EVisibility.HIDDEN];
    return yield employeeRepo.save(user);
});
exports.deleteEmployeeById = deleteEmployeeById;
const deleteAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepository)();
    users = yield employeeRepo.find({});
    users.forEach((user) => __awaiter(void 0, void 0, void 0, function* () {
        user.visibility = EVisibibility_enum_1.EVisibility[EVisibibility_enum_1.EVisibility.HIDDEN];
        yield employeeRepo.save(user);
    }));
});
exports.deleteAllEmployees = deleteAllEmployees;
//# sourceMappingURL=employees.service.js.map