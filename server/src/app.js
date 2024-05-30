import express from "express";
import cors from "cors";
import dotenv from 'dotenv'

import userRoute from "./routes/user.route.js";

const app = express();
import connectDB from './database/config.js'

dotenv.config()

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// parse application/json
app.use(express.json());

// Main Routes
app.use('/api/user', userRoute)

connectDB()

export default app;
