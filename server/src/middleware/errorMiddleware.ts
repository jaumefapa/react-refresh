import type { NextFunction, Request, Response } from "express";
import type { HttpException } from "../exceptions/root";

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    error: error.error,
    stack: process.env.NODE_ENV === "development" && error.stack,
  });
};
