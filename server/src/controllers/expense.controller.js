import { asyncHandler } from "../utils/asyncHandler.js";
import { Expense } from "../models/expense.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createExpense = asyncHandler(async (req, res) => {
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    const expense = await Expense.create({
        title,
        amount,
        category,
    })

    return res.status(200).json(
        new ApiResponse(200, expense, "Expense created successfully")
    )
})

const updateExpense = asyncHandler(async (req, res) => {

    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    const expense = await Expense.findByIdAndUpdate(req.params.id, {
        title,
        amount,
        category
    })

    return res.status(200).json(
        new ApiResponse(200, expense, "Expense updated successfully")
    )
})

const deleteExpense = asyncHandler(async (req, res) => {
    const expense = await Expense.findByIdAndDelete(req.params.id)

    return res.status(200).json(
        new ApiResponse(200, {}, "Expense deleted successfully")
    )
})

const getAllExpenses = asyncHandler(async (req, res) => {
    const expense = await Expense.find()

    return res.status(200).json(
        new ApiResponse(200, expense, "Expense fetched successfully")
    )
})

export {
    createExpense,
    updateExpense,
    deleteExpense,
    getAllExpenses
}