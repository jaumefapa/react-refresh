import jwt from "jsonwebtoken";
import type { Response } from "express";

import { JWT_SECRET } from "../secrets";

const generateToken = (res: Response, userId: string): void => {
  const jwtSecret = JWT_SECRET;
  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000,
  });
};

const clearToken = (res: Response): void => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
};

export { generateToken, clearToken };
