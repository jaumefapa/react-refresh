import type { Request } from "express";

export type AuthRequest = Request & {
  user: {
    id: number;
    token: string;
  };
};

export type user = {
  username: string;
  email: string;
};

export type rawUser = user & {
  id: number;
  password: string;
};

export type favorite = {
  id: number;
  characterId: number;
  userId: number;
};
