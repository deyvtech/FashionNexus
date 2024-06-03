import express from "express";
import cors from "cors";
import dotenv from 'dotenv'

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
import connectDB from './database/config.js'

dotenv.config()

// app.use(cors());

app.use(cors({
    origin: 'https://fashion-nexus-client.vercel.app', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));
// parse application/json
app.use(express.json());

// Main Routes
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute)

// Root Routes
app.get('/', (request, response) => {
    response.json({msg: 'Welcome to FashionNexus server'})
})

// Main middleware 
app.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500
    const message = error.message || 'Internal Server Error'
    return response.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})

connectDB()

export default app;
