import dotenv from "dotenv";

dotenv.config();

const {
  JWT_SECRET: _JWT_SECRET,
  NODE_ENV: _NODE_ENV,
  PORT: _PORT,
  CLIENT_HOST: _CLIENT_HOST,
  CLIENT_PORT: _CLIENT_PORT,
  DOMAIN: _DOMAIN,
  POSTGRES_PORT: _POSTGRES_PORT,
  POSTGRES_USER: _POSTGRES_USER,
  POSTGRES_DB: _POSTGRES_DB,
  POSTGRES_PASSWORD: _POSTGRES_PASSWORD,
  DATABASE_URL: _DATABASE_URL,
} = process.env;

// TODO: Add proper validation for each type of envVar with 3rd party library. Ex: isNum, isEnum('development', 'production', 'test')

const validateEnvVariable = (
  envVar: string | undefined,
  envVarName: string
) => {
  if (!envVar) {
    throw new Error(`${envVarName} is not defined`);
  } else {
    return envVar;
  }
};
export const JWT_SECRET = validateEnvVariable(_JWT_SECRET, "JWT_SECRET");

export const NODE_ENV = validateEnvVariable(_NODE_ENV, "NODE_ENV");

export const PORT = validateEnvVariable(_PORT, "PORT");

export const CLIENT_HOST = validateEnvVariable(_CLIENT_HOST, "CLIENT_HOST");

export const CLIENT_PORT = validateEnvVariable(_CLIENT_PORT, "CLIENT_PORT");

export const DOMAIN = validateEnvVariable(_DOMAIN, "DOMAIN");

export const POSTGRES_PORT = validateEnvVariable(
  _POSTGRES_PORT,
  "POSTGRES_PORT"
);

export const POSTGRES_USER = validateEnvVariable(
  _POSTGRES_USER,
  "POSTGRES_USER"
);

export const POSTGRES_DB = validateEnvVariable(_POSTGRES_DB, "POSTGRES_DB");

export const POSTGRES_PASSWORD = validateEnvVariable(
  _POSTGRES_PASSWORD,
  "POSTGRES_PASSWORD"
);

export const DATABASE_URL = () => {
  if (
    _DATABASE_URL ===
    `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public`
  ) {
    return _DATABASE_URL;
  } else {
    throw new Error("DATABASE_URL is not defined");
  }
};
