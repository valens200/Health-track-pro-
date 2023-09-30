import { LoginDTO } from "../dtos/auth/login.dto";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { ForbiddenException } from "../exceptions/forbidden.exception";
import { NotFoundException } from "../exceptions/not-found.exception";
import { ApiResponse } from "../payload/apiResponse";
import * as authService from "../services/auth.service";
import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  try {
    const dto: LoginDTO = req.body;
    return new ApiResponse(
      true,
      "User loggedIn successfully",
      await authService.login(dto)
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
