import express from "express";
import { createExpense, deleteExpense, getAllExpenses, updateExpense } from "../controllers/expense.controller.js";
const router = express.Router();

router
    .route("/")
    .post(createExpense)
    .get(getAllExpenses)

router
    .route("/:id")
    .patch(updateExpense)
    .delete(deleteExpense)

export default router