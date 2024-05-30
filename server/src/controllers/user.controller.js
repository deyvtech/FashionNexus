import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";

export const createUser = async (request, response, next) => {
	const { name, email, password } = request.body;

	try {
		const user = new User({ name, email, password });

        await user.save();
		response.status(201).send({ msg: "Create user successfully" });
        
	} catch (error) {
		// next(error)
		// Custom Error
		next(errorHandler(500, 'Custom error'))
	}
};