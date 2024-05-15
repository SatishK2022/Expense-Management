import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isCustom: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true, versionKey: false
})

export const Category = mongoose.model("Category", categorySchema)