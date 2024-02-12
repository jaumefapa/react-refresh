import bcrypt from "bcrypt";
import type { NextFunction, Request, Response } from "express";

import type { rawUser } from "../../interfaces/interfaces";
import * as UserService from "./user-service";
import { generateAccessToken, hashPassword } from "../../utils/";
import {
  BadRequestException,
  NotFoundException,
} from "../../exceptions/exceptions";
import { ErrorCodes } from "../../exceptions/root";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password, username } = req.body;

  // TODO: Input validation (It could also be a middleware) with a library like Joi
  if (!email || !password || !username)
    next(new BadRequestException("Bad request", ErrorCodes.BAD_REQUEST));

  const userAlreayExists = await UserService.findUserByEmail(email);

  if (userAlreayExists)
    next(
      new BadRequestException(
        "User already exists",
        ErrorCodes.USER_ALREADY_EXISTS
      )
    );

  const hashedPassword = await hashPassword(password);

  const newUser: rawUser = await UserService.createUserByEmailAndPassword({
    username,
    email,
    password: hashedPassword,
  });

  const token = generateAccessToken(newUser.id.toString());

  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
    token,
  });
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;

  // TODO: Input validation (It could also be a middleware) with a library like Joi
  if (!email || !password)
    next(
      next(
        new BadRequestException("Missing credentials", ErrorCodes.BAD_REQUEST)
      )
    );

  const user = await UserService.findUserByEmail(email);

  if (!user) {
    next(new NotFoundException("User not found", ErrorCodes.WRONG_CREDENTIALS));
    return;
  }

  const match = await bcrypt.compare(password as string, user.password);

  if (!match) {
    next(
      new BadRequestException("Wrong credentials", ErrorCodes.WRONG_CREDENTIALS)
    );
    return;
  }

  const token = generateAccessToken(user.id.toString());

  res.status(200).json({
    username: user.username,
    email: user.email,
    token,
  });
};
