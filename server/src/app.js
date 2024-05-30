import express from "express";
import cors from "cors";
const app = express();

import testRoute from "./routes/test.route.js";


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// parse application/json
app.use(express.json());

// Main Routes
app.use('/api', testRoute)

export default app;
