import type { NextFunction, Request, Response } from "express";

import { BadRequestException } from "../../exceptions/exceptions";
import { ErrorCodes } from "../../exceptions/root";

const RICK_AND_MORTY_API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const page = Number(req.query.page);
  let pagination = "";

  if (page && typeof page === "number") {
    pagination = `?page=${page?.toString()}`;
  } else {
    next(new BadRequestException("Invalig page", ErrorCodes.BAD_REQUEST));
  }

  if (page >= 41)
    next(new BadRequestException("Page out of rang", ErrorCodes.BAD_REQUEST));

  const rawData = await fetch(`${RICK_AND_MORTY_API_URL}${pagination}`);

  const data = await rawData.json();

  res.status(200).send(data);
};
