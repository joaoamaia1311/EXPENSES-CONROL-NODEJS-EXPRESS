import express from "express";
import { authenticateToken } from "../middlewares/authenticate-jwt.js";
import { TransactionController } from "./controller.js";

const transactionController = new TransactionController();

const app = express();

app.get("/", authenticateToken, transactionController.findByUser);

export const transactionRouter = app;