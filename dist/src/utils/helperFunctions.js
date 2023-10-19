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
exports.generateRandomFourDigitNumber = exports.hashString = exports.getGender = void 0;
const bad_request_exception_1 = require("../exceptions/bad-request.exception");
const bcrypt = __importStar(require("bcrypt"));
const EGender_enum_1 = require("../enums/EGender.enum");
// let user: Patient;
// let type: string;
// export const getTokens = async (entity: string, user: Patient) => {
//   switch (type.toUpperCase()) {
//     case EUserType[EUserType.ADMIN]:
//       type = EUserType[EUserType.ADMIN];
//       break;
//     case EUserType[EUserType.PATIENT]:
//       type = EUserType[EUserType.PATIENT];
//       break;
//     default:
//       throw new BadRequestException("The provided user type is invalid");
//   }
//   const accessToken: String = await jwt.signAsync(
//     {
//       type: type,
//       // roles: user.roles,
//       id: user.nationalId,
//     },
//     {
//       expiresIn: "10h",
//       secret: process.env.SECRET_KEY,
//     }
//   );
//   const refreshToken: String = await jwt.signAsync(
//     {
//       type: type,
//       // roles: user.roles,
//       id: user.nationalId,
//     },
//     {
//       expiresIn: "1d",
//       secret: process.env.SECRET_KEY,
//     }
//   );
//   return {
//     accessToken: accessToken,
//     refreshToken: refreshToken,
//   };
// };
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
//# sourceMappingURL=helperFunctions.js.map