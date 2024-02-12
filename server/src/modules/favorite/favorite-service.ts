import type { favorite } from "../../interfaces/interfaces";
import db from "../../utils/db";

export const addFavorite = async (
  userId: number,
  characterId: number
): Promise<favorite> => {
  const favorite = await db.favoriteCharacter.create({
    data: {
      userId,
      characterId,
    },
  });
  return favorite;
};

export const removeFavorite = async (favoriteId: number): Promise<favorite> => {
  const favorite = await db.favoriteCharacter.delete({
    where: {
      id: favoriteId,
    },
  });
  return favorite;
};

export const findAllFavorites = async (
  userId: number
): Promise<Array<Omit<favorite, "userId">>> => {
  const favorites = await db.favoriteCharacter.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      characterId: true,
    },
  });
  return favorites;
};
