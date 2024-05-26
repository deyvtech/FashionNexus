import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

import testRoute from "./routes/test.route.js";


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Main Routes
app.use('/api/test', testRoute)

export default app;
