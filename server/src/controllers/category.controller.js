import { Category } from "../models/category.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const addCustomCategory = asyncHandler(async (req, res) => {
    const { name } = req.body

    const customCategory = await Category.findOne({ name, isCustom: true })

    if (customCategory) {
        return res.status(400).json({
            success: false,
            message: `Category ${name} already exists`
        })
    }

    const category = await Category.create({
        name,
        isCustom: true
    })

    return res.status(200).json(
        new ApiResponse(200, category, "Category added successfully")
    )
})

const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find()

    return res.status(200).json(
        new ApiResponse(200, categories, "All categories fetched successfully")
    )
})


const deleteAllCategory = asyncHandler(async (req, res) => {
    const deletedCategories = await Category.deleteMany({})

    return res.status(200).json(
        new ApiResponse(200, deletedCategories, "All categories deleted successfully")
    )
})

export {
    addCustomCategory,
    getAllCategories,
    deleteAllCategory
}