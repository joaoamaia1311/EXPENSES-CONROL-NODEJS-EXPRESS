import express from "express";
import { authenticateToken } from "../middlewares/authenticate-jwt.js";
import { TransactionController } from "./controller.js";
import admin from 'firebase-admin';

const transactionController = new TransactionController();

const app = express();

app.get("/", 
    (request, response, next) => authenticateToken(request, response, next, admin.auth()),
    (request, response) => transactionController.findByUser(request, response)
);

export const transactionRouter = app;