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
exports.login = void 0;
const bad_request_exception_1 = require("../exceptions/bad-request.exception");
const forbidden_exception_1 = require("../exceptions/forbidden.exception");
const not_found_exception_1 = require("../exceptions/not-found.exception");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = req.body;
    }
    catch (error) {
        if (error instanceof not_found_exception_1.NotFoundException ||
            error instanceof bad_request_exception_1.BadRequestException ||
            error instanceof forbidden_exception_1.ForbiddenException)
            return res.status(error.statusCode);
        console.log(error);
    }
});
exports.login = login;
//# sourceMappingURL=auth.controller.js.map