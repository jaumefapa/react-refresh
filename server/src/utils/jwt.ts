import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../secrets";

export const generateAccessToken = (userId: string): string => {
  return jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "3d",
  });
};
