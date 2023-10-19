import { ERepositoryType } from "../enums/ERepositoryType.enum";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { EUserType } from "../enums/EUserType.enum";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { EGender } from "../enums/EGender.enum";
import { Patient } from "../entities/patient.entity";

let user: Patient;
let type: string;
export const getTokens = async (entity: string, user: Patient) => {
  switch (type.toUpperCase()) {
    case EUserType[EUserType.ADMIN]:
      type = EUserType[EUserType.ADMIN];
      break;
    case EUserType[EUserType.PATIENT]:
      type = EUserType[EUserType.PATIENT];
      break;
    default:
      throw new BadRequestException("The provided user type is invalid");
  }

  const accessToken: String = await jwt.signAsync(
    {
      type: type,
      // roles: user.roles,
      id: user.nationalId,
    },
    {
      expiresIn: "10h",
      secret: process.env.SECRET_KEY,
    }
  );

  const refreshToken: String = await jwt.signAsync(
    {
      type: type,
      // roles: user.roles,
      id: user.nationalId,
    },
    {
      expiresIn: "1d",
      secret: process.env.SECRET_KEY,
    }
  );
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const getGender = (gender: string) => {
  switch (gender.toUpperCase()) {
    case EGender[EGender.FEMALE]:
      return EGender[EGender.FEMALE];
    case EGender[EGender.MALE]:
      return EGender[EGender.MALE];
    case EGender[EGender.OTHER]:
      return EGender[EGender.OTHER];
    default:
      throw new BadRequestException("The provided gender is invalid");
  }
};
export const hashString = async (input: string) => {
  try {
    const hashed = await bcrypt.hash(input, 10);
    return hashed;
  } catch (error) {
    console.error("Error occurred while hashing:", error.message);
    throw error;
  }
};

export const generateRandomFourDigitNumber = (): number => {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
