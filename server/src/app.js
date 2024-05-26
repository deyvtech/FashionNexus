import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./api/routes/user.route";
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Main Routes
app.use('/api/user', userRoute)

export default app;
