import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import type { AuthRequest } from "../interfaces/interfaces";

import type { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/exceptions";
import { ErrorCodes } from "../exceptions/root";
import { JWT_SECRET } from "../secrets";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error();

    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    (req as AuthRequest).user = {
      id: Number((decoded as JwtPayload).userId),
      token,
    };

    next();
  } catch (err) {
    // TODO: Handle TokenExpiredError ErrorCode.TOKEN_EXPIRED
    next(new UnauthorizedException("Wrong token", ErrorCodes.UNAUTHORIZED));
  }
};
