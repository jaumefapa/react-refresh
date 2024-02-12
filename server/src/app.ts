import express from "express";
import type { Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { CLIENT_HOST, CLIENT_PORT, DOMAIN, NODE_ENV } from "./secrets";
import { apiRouter } from "./apiRouter";
import { errorMiddleware, notFound } from "./middleware";

export const app: Application = express();

const corsConfig = {
  origin:
    NODE_ENV === "production"
      ? `https://${DOMAIN}`
      : `http://${CLIENT_HOST}:${CLIENT_PORT}`,
  credentials: true,
};

if (NODE_ENV === "development") {
  morgan.format(
    "myFormat",
    ':date[iso] :method ":url" :status :res[content-length] - :response-time ms'
  );
  app.use(morgan("myFormat"));
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use("/api/v1", apiRouter);

app.use(notFound);
app.use(errorMiddleware);
