import express, { Router } from "express";
import MongoDbContext from "./src/models/context/mongoDbContext.js";
import Program from "./src/webApis/program.js";
import { envMongo } from "./src/commons/envs.js";
import AppRouter from "./src/webApis/routes/appRouter.js";

const router = Router();
const appServer = express();

const start = async () => {
  await MongoDbContext.connect(envMongo.MONGO_CONNECTION);

  Program.init(appServer, AppRouter.getRouter(router));
};

start();
