import { LoginDTO } from "../dtos/auth/login.dto";
import { BadRequestException } from "../exceptions/bad-request.exception";
import { ForbiddenException } from "../exceptions/forbidden.exception";
import { NotFoundException } from "../exceptions/not-found.exception";
import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  try {
    const dto: LoginDTO = req.body;
  } catch (error) {
    if (
      error instanceof NotFoundException ||
      error instanceof BadRequestException ||
      error instanceof ForbiddenException
    )
      return res.status(error.statusCode);
    console.log(error);
  }
};
