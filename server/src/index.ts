import { app } from "./app";

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(
    `Server listening at http://localhost:${PORT} with env=${NODE_ENV}`,
  );
});
