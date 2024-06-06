// connect monngoDB
import mongoose from "mongoose";

export default async function connectDB() {
	try {

		const connect = await mongoose.connect(process.env.MONGODB_URI);
		
		console.log(`Connected to Database: ${connect.connection.host}`);

	} catch (error) {
		console.error('Error:' + error.message)
		process.exit(1)
	}
}
