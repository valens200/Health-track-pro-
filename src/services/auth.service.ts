import { LoginDTO } from "../dtos/auth/login.dto";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { ForbiddenException } from "../exceptions/forbidden.exception";
import * as utils from "../utils/helperFunctions";
import * as employeeService from "../services/employees.service";
import * as bcrypt from "bcrypt";
import { Patient } from "../entities/patient.entity";
import { EUserType } from "../enums/EUserType.enum";

let employee: Patient;
export const login = async (dto: LoginDTO) => {
  let tokens;
  switch (dto.userType.toUpperCase()) {
    case EUserType[EUserType.PATIENT]:
      break;
    case EUserType[EUserType.ADMIN]:
      employee = await employeeService.getEmployeeByEmail(dto.email);
      if (!employee) throw new ForbiddenException("Invalid email or password");
      const arePasswordsMatch = await bcrypt.compare(
        // employee.password,
        dto.password
      );
      if (!arePasswordsMatch)
        throw new ForbiddenException("Invalid email or passsword");
      tokens = await utils.getTokens("employee", employee);
      break;
    default:
      throw new BadRequestException("The provided user type is invalid");
  }

  return {
    user: employee,
    access_token: tokens.access_token,
    refresh_token: tokens.tokens,
  };
};
