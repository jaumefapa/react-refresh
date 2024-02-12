import express from "express";

import { registerUser, loginUser } from "./user-handler";
import { errorHandler } from "../../middleware";

const userRouter = express.Router();

userRouter.post("/register", errorHandler(registerUser));
userRouter.post("/login", errorHandler(loginUser));

export default userRouter;
