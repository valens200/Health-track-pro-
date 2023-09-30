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
exports.createUser = void 0;
const user_entity_1 = require("../entities/user.entity");
const repositories_1 = require("../repositories/repositories");
const createUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const repositories = yield (0, repositories_1.getRepositories)();
    const user = new user_entity_1.User("valebs", "valens");
    const createdUser = yield repositories.userRepository.save(user);
    console.log(createdUser);
});
exports.createUser = createUser;
//# sourceMappingURL=users.controller.js.map