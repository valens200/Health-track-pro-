import { LoginDTO } from "../dtos/auth/login.dto";
import { User } from "../entities/user.entity";
import { EUserType } from "../enums/EUserType.enum";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { ForbiddenException } from "../exceptions/forbidden.exception";
import * as utils from "../utils/helperFunctions";
import * as employeeService from "../services/employees.service";
import * as bcrypt from "bcrypt";

let employee: User;
export const login = async (dto: LoginDTO) => {
  let tokens;
  switch (dto.userType.toUpperCase()) {
    case EUserType[EUserType.COMPANY]:
      break;
    case EUserType[EUserType.EMPLOYEE]:
      employee = await employeeService.getEmployeeByEmail(dto.email);
      if (!employee) throw new ForbiddenException("Invalid email or password");
      const arePasswordsMatch = await bcrypt.compare(
        employee.password,
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
