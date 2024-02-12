import type { rawUser } from "../../interfaces/interfaces";
import db from "../../utils/db";

export const findUserByEmail = async (
  email: string
): Promise<rawUser | null> => {
  return await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      username: true,
      password: true,
    },
  });
};

export const createUserByEmailAndPassword = async (
  user: Omit<rawUser, "id">
): Promise<rawUser> => {
  return await db.user.create({
    data: user,
    select: {
      id: true,
      email: true,
      password: true,
      username: true,
    },
  });
};
