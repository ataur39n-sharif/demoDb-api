import dotenv from 'dotenv'
import cors from 'cors';
import express, { Application } from 'express'
import mongoose from "mongoose";
import rootRouter from "./Router";

dotenv.config()

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use('/api', rootRouter)

const { MONGO_URI, PORT } = process.env

if (MONGO_URI) {
    mongoose
        .connect(MONGO_URI)
        .then((result) => console.log('DB Connected'))
        .catch((err) => console.log(err.message))
}

app.listen(PORT, () => {
    console.log(`application running on port ${PORT}`)
})