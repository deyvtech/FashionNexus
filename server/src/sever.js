import express from "express";
import testRoute from "./routes/test.route.js";
const app = express();

app.use('/api', testRoute);

app.listen(3000, () => {
	console.log("Listen to the port 3000");
});
