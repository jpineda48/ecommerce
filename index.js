import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import morgan from "morgan"
import authRoutes from './routes/auth.js'
import categoryRoutes from './routes/category.js'
import productRoutes from './routes/product.js'

const app = express()
dotenv.config()

// const express = require('express')

//db
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("DB Connected"))
    .catch((err) => console.log("DB ERROR =>", err))

///middleware
app.use(morgan("dev"))    
app.use(express.json())


app.use('/api',authRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})




