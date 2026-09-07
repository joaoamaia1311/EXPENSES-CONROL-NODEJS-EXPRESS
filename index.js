import express from "express";
import admin from "firebase-admin";
import { authenticateToken } from "./middlewares/authenticate-jwt.js";
import { TransactionController } from "./transactions/controller.js";
import { transactionRouter } from "./transactions/routes.js";

// REST API http://api.controle-de-gastos.com/transactions

const app = express();

admin.initializeApp({
	credential: admin.credential.cert("serviceAccountKey.json"),
});

app.use('/transactions', transactionRouter);

// GET http://api.controle-de-gastos.com/transactions/:id

// POST http://api.controle-de-gastos.com/transactions

// PUT http://api.controle-de-gastos.com/transactions/:id
 
// DELETE http://api.controle-de-gastos.com/transactions/:id

app.listen(3000, () =>
	console.log("API rest iniciada em http://localhost:3000"),
);
