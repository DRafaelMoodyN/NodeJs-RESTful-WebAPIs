import express, { Router } from "express";
import Program from "./src/webApis/program.js";
import AppRouter from "./src/webApis/routes/appRouter.js";

const router = Router();
const appServer = express();

Program.init(appServer, AppRouter.getRouter(router));
