/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";

import { getCharacters } from "./character-handler";
import { errorHandler } from "../../middleware";

const userRouter = express.Router();

userRouter.get("/", errorHandler(getCharacters));

export default userRouter;
