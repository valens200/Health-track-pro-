import { getRepositories } from "../repositories/repositories";
import { ERepositoryType } from "../enums/ERepositoryType.enum";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { EUserType } from "../enums/EUserType.enum";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { EGender } from "../enums/EGender.enum";

let user: User;
let type: string;
export const getTokens = async (entity: string, user: User) => {
  switch (type.toUpperCase()) {
    case EUserType[EUserType.COMPANY]:
      type = EUserType[EUserType.COMPANY];
      break;
    case EUserType[EUserType.EMPLOYEE]:
      type = EUserType[EUserType.EMPLOYEE];
      break;
    default:
      throw new BadRequestException("The provided user type is invalid");
  }

  const accessToken: String = await jwt.signAsync(
    {
      type: type,
      // roles: user.roles,
      id: user.id,
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
      id: user.id,
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

export const getEmployeeType = (type: string) => {
  switch (type.toUpperCase()) {
    case EUserType[EUserType.ADMIN]:
      return EUserType[EUserType.ADMIN];
    case EUserType[EUserType.EMPLOYEE]:
      return EUserType[EUserType.EMPLOYEE];
    default:
      throw new BadRequestException("The provided employee type is invalid");
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
export const initializeRepositories = async (repositoryType: string) => {
  const repositories: any = await getRepositories();
  switch (repositoryType.toUpperCase()) {
    case ERepositoryType[ERepositoryType.COMPANY]:
      return repositories.companyRepository;
    case ERepositoryType[ERepositoryType.EMPLOYEE]:
      return repositories.employeeRepository;
    case ERepositoryType[ERepositoryType.USER]:
      return repositories.userRepository;
    default:
      throw new BadRequestException("The provided repo type is invalid");
  }
};
export const getEnvironmentVariables = () => {
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
