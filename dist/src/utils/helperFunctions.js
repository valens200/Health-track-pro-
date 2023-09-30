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
exports.getEnvironmentVariables = exports.initializeRepositories = exports.generateRandomFourDigitNumber = exports.hashString = exports.getEmployeeType = exports.getGender = exports.getTokens = void 0;
const repositories_1 = require("../repositories/repositories");
const ERepositoryType_enum_1 = require("../enums/ERepositoryType.enum");
const bad_request_exception_1 = require("../exceptions/bad-request.exception");
const EUserType_enum_1 = require("../enums/EUserType.enum");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const EGender_enum_1 = require("../enums/EGender.enum");
let user;
let type;
const getTokens = (entity, user) => __awaiter(void 0, void 0, void 0, function* () {
    switch (type.toUpperCase()) {
        case EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.COMPANY]:
            type = EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.COMPANY];
            break;
        case EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.EMPLOYEE]:
            type = EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.EMPLOYEE];
            break;
        default:
            throw new bad_request_exception_1.BadRequestException("The provided user type is invalid");
    }
    const accessToken = yield jwt.signAsync({
        type: type,
        // roles: user.roles,
        id: user.id,
    }, {
        expiresIn: "10h",
        secret: process.env.SECRET_KEY,
    });
    const refreshToken = yield jwt.signAsync({
        type: type,
        // roles: user.roles,
        id: user.id,
    }, {
        expiresIn: "1d",
        secret: process.env.SECRET_KEY,
    });
    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
    };
});
exports.getTokens = getTokens;
const getGender = (gender) => {
    switch (gender.toUpperCase()) {
        case EGender_enum_1.EGender[EGender_enum_1.EGender.FEMALE]:
            return EGender_enum_1.EGender[EGender_enum_1.EGender.FEMALE];
        case EGender_enum_1.EGender[EGender_enum_1.EGender.MALE]:
            return EGender_enum_1.EGender[EGender_enum_1.EGender.MALE];
        case EGender_enum_1.EGender[EGender_enum_1.EGender.OTHER]:
            return EGender_enum_1.EGender[EGender_enum_1.EGender.OTHER];
        default:
            throw new bad_request_exception_1.BadRequestException("The provided gender is invalid");
    }
};
exports.getGender = getGender;
const getEmployeeType = (type) => {
    switch (type.toUpperCase()) {
        case EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.ADMIN]:
            return EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.ADMIN];
        case EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.EMPLOYEE]:
            return EUserType_enum_1.EUserType[EUserType_enum_1.EUserType.EMPLOYEE];
        default:
            throw new bad_request_exception_1.BadRequestException("The provided employee type is invalid");
    }
};
exports.getEmployeeType = getEmployeeType;
const hashString = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashed = yield bcrypt.hash(input, 10);
        return hashed;
    }
    catch (error) {
        console.error("Error occurred while hashing:", error.message);
        throw error;
    }
});
exports.hashString = hashString;
const generateRandomFourDigitNumber = () => {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.generateRandomFourDigitNumber = generateRandomFourDigitNumber;
const initializeRepositories = (repositoryType) => __awaiter(void 0, void 0, void 0, function* () {
    const repositories = yield (0, repositories_1.getRepositories)();
    switch (repositoryType.toUpperCase()) {
        case ERepositoryType_enum_1.ERepositoryType[ERepositoryType_enum_1.ERepositoryType.COMPANY]:
            return repositories.companyRepository;
        case ERepositoryType_enum_1.ERepositoryType[ERepositoryType_enum_1.ERepositoryType.EMPLOYEE]:
            return repositories.employeeRepository;
        case ERepositoryType_enum_1.ERepositoryType[ERepositoryType_enum_1.ERepositoryType.USER]:
            return repositories.userRepository;
        default:
            throw new bad_request_exception_1.BadRequestException("The provided repo type is invalid");
    }
});
exports.initializeRepositories = initializeRepositories;
const getEnvironmentVariables = () => {
    return {
        type: "postgres",
        host: `${process.env.DB_HOST}`,
        port: 5432,
        username: `${process.env.DB_USERNAME}`,
        password: `${process.env.DB_PASSWORD}`,
        database: `${process.env.DB_NAME}`,
        synchronize: true,
        logging: true,
        entities: ["../src/entities/**/*.ts"],
        migrations: ["../src/migrations/**/*.ts"],
        subscribers: ["../src/subscribers/**/*.ts"],
        cli: {
            entitiesDir: "../src/entities",
            migrationsDir: "../src/migrations",
            subscribersDir: "../src/subscribers",
        },
    };
};
exports.getEnvironmentVariables = getEnvironmentVariables;
//# sourceMappingURL=helperFunctions.js.map