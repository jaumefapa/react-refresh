import type { NextFunction, Request, Response } from "express";
import { ErrorCodes, HttpException } from "../exceptions/root";
import { InternalErrorException } from "../exceptions/exceptions";

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error) {
      let exception: HttpException;
      if (error instanceof HttpException) {
        exception = error;
      } else {
        exception = new InternalErrorException(
          "Something went wrong!",
          error,
          ErrorCodes.INTERNAL_ERROR
        );
      }
      next(exception);
    }
  };
};
