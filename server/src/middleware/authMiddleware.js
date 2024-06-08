import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const protect = async (request, response, next) => {
	let token;
	token = request.cookies.jwt;
    if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			/* This line of code is fetching the user data from the database based on the `userId` extracted from
            the decoded JWT token. It is using the `User` model to find the user by their `userId` and excluding
            the `password` field from the retrieved user data. The retrieved user data is then assigned to
            `request.user`, making it available for further processing in the application. */
			request.user = await User.findById(decoded.userId).select(
				"-password"
			);

			next();
		} catch (error) {
            next(errorHandler(401, "Not authorized, invalid token"))
		}
	} else next(errorHandler(401, "Not authorized, no token"));
};
