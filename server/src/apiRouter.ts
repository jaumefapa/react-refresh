import express from "express";

import { isAuthenticated } from "./middleware";
import user from "./modules/user/user-route";
import character from "./modules/character/character-route";
import favorite from "./modules/favorite/favorite-route";

export const apiRouter = express.Router();

// Open routes
apiRouter.use("/user", user);
apiRouter.get("/status", (req, res) => {
  res.json({
    message: "API v1.0.0 is up and running!",
  });
});

// Authenticaded routes
apiRouter.use("/character/favorite", isAuthenticated, favorite);
apiRouter.use("/character", isAuthenticated, character);
