"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.createEmployee = void 0;
const not_found_exception_1 = require("../exceptions/not-found.exception");
const bad_request_exception_1 = require("../exceptions/bad-request.exception");
const forbidden_exception_1 = require("../exceptions/forbidden.exception");
const apiResponse_1 = require("../payload/apiResponse");
const employeeService = __importStar(require("../services/employees.service"));
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeEntity = req.body;
    try {
        return res
            .status(200)
            .json(new apiResponse_1.ApiResponse(true, "The employee created successfully", yield employeeService.createEmployee(employeeEntity)));
    }
    catch (error) {
        if (error instanceof not_found_exception_1.NotFoundException ||
            error instanceof bad_request_exception_1.BadRequestException ||
            error instanceof forbidden_exception_1.ForbiddenException)
            return res
                .status(error.statusCode)
                .json(new apiResponse_1.ApiResponse(false, error.message, null));
        console.log(error);
    }
});
exports.createEmployee = createEmployee;
//# sourceMappingURL=employees.controller.js.map