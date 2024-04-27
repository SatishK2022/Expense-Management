import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(morgan("dev"))

// routes import
import expenseRouter from "./routes/expense.routes.js"

// routes decleration
app.use("/api/v1/expense", expenseRouter)


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "😊 I am Working Fine"
    })   
})

export { app }