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
exports.deleteAllUsers = exports.deleteUserById = exports.updateUser = exports.getAllUsers = exports.getUserByEmail = exports.getUserById = exports.initializeRepositories = void 0;
const not_found_exception_1 = require("../exceptions/not-found.exception");
const EVisibibility_enum_1 = require("../enums/EVisibibility.enum");
let repositories;
let user;
let users = [];
const initializeRepositories = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.initializeRepositories = initializeRepositories;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepositories)();
    user = yield repositories.userRepository.findOne({ where: { id: id } });
    if (!user)
        throw new not_found_exception_1.NotFoundException("The user with the provided id is not found");
    return user;
});
exports.getUserById = getUserById;
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepositories)();
    user = yield repositories.userRepository.findOne({ where: { email: email } });
    if (!user)
        throw new not_found_exception_1.NotFoundException("The user with the provided id is not found");
    return user;
});
exports.getUserByEmail = getUserByEmail;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepositories)();
    return yield repositories.userRepository.find({});
});
exports.getAllUsers = getAllUsers;
const updateUser = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateUser = updateUser;
const deleteUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepositories)();
    user = yield (0, exports.getUserById)(id);
    user.visibility = EVisibibility_enum_1.EVisibility[EVisibibility_enum_1.EVisibility.HIDDEN];
    return yield repositories.userRepository.save(user);
});
exports.deleteUserById = deleteUserById;
const deleteAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initializeRepositories)();
    users = yield repositories.userRepository.find({});
    users.forEach((user) => __awaiter(void 0, void 0, void 0, function* () {
        user.visibility = EVisibibility_enum_1.EVisibility[EVisibibility_enum_1.EVisibility.HIDDEN];
        yield repositories.userRepository.save(user);
    }));
});
exports.deleteAllUsers = deleteAllUsers;
//# sourceMappingURL=users.service.js.map