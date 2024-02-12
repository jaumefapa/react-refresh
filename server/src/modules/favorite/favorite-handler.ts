import type { NextFunction, Request, Response } from "express";
import type { AuthRequest } from "../../interfaces/interfaces";

import * as FavoriteService from "./favorite-service";
import { BadRequestException } from "../../exceptions/exceptions";
import { ErrorCodes } from "../../exceptions/root";

export const addFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: number = (req as AuthRequest).user.id;
  const { characterId } = req.body;

  // Proper input data validation with external library
  if (typeof userId !== "number" || typeof characterId !== "number") {
    next(new BadRequestException("Wrong data", ErrorCodes.BAD_REQUEST));
  }

  // TODO: Check characterId exists --> 404

  const newFavorite = await FavoriteService.addFavorite(userId, characterId);

  res.status(201).json(newFavorite);
};

export const removeFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const favoriteId: number = Number(req.query.favoriteId);

  // TODO: Proper input data validation with external library
  if (typeof favoriteId !== "number" || isNaN(favoriteId))
    next(new BadRequestException("Wrong data", ErrorCodes.BAD_REQUEST));

  // TODO: Check that favorite belongs to user --> 403

  const removedFavorite = await FavoriteService.removeFavorite(favoriteId);

  res.status(200).json(removedFavorite);
};

export const findAllFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: number = (req as AuthRequest).user.id;

  // TODO: Proper input data validation with external library
  if (typeof userId !== "number" || isNaN(userId))
    next(new BadRequestException("Wrong data", ErrorCodes.BAD_REQUEST));

  const favorites = await FavoriteService.findAllFavorites(userId);

  res.status(200).json(favorites);
};
