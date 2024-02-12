import express from "express";

import {
  addFavorite,
  findAllFavorites,
  removeFavorite,
} from "./favorite-handler";
import { errorHandler } from "../../middleware";

const favoriteRouter = express.Router();

favoriteRouter.post("/", errorHandler(addFavorite));
favoriteRouter.get("/", errorHandler(findAllFavorites));
favoriteRouter.delete("/", errorHandler(removeFavorite));

export default favoriteRouter;
