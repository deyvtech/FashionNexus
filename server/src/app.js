import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import authRoute from "./routes/auth.route.js";

const app = express();
import connectDB from './database/config.js'

dotenv.config()

connectDB()


app.use(cors({
    origin: 'http://localhost:5173',
	credentials: true
}));

// app.use(cors({
//     origin: 'https://fashion-nexus-client.vercel.app', // Replace with your frontend domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//   }));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// parse application/json
app.use(express.json());

app.use(cookieParser());

// Main Routes
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


export default app;
