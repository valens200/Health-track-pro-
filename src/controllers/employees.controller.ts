import { Request, Response } from "express";
import { NotFoundException } from "../exceptions/not-found.exception";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { ForbiddenException } from "../exceptions/forbidden.exception";
import { ApiResponse } from "../payload/apiResponse";
import { CreateEmployeeDTO } from "../dtos/employees/create-employee.dto";
import * as employeeService from "../services/employees.service";

export const createEmployee = async (req: Request, res: Response) => {
  const employeeEntity: CreateEmployeeDTO = req.body;
  try {
    return res
      .status(200)
      .json(
        new ApiResponse(
          true,
          "The employee created successfully",
          await employeeService.createEmployee(employeeEntity)
        )
      );
  } catch (error) {
    if (
      error instanceof NotFoundException ||
      error instanceof BadRequestException ||
      error instanceof ForbiddenException
    )
      return res
        .status(error.statusCode)
        .json(new ApiResponse(false, error.message, null));
    console.log(error);
  }
};
