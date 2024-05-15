import express from "express";
import { addCustomCategory, deleteAllCategory, getAllCategories } from "../controllers/category.controller.js";
const router = express.Router();

router
    .route("/")
    .post(addCustomCategory)
    .get(getAllCategories)
    .delete(deleteAllCategory)

export default router