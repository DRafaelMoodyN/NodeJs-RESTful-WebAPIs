import "dotenv/config.js";

const env = process.env;

const envsConfig = {
  PORT: env.PORT,
};

const envMongo = {
  MONGO_CONNECTION: env.MONGO_CONNECTION,
};

export { envMongo, envsConfig };
