import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const protect = async (request, response, next) => {
	let token;
	token = request.cookies.jwt;
    if (token) {
		try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // send the user data
            request.user = await User.findById(decoded.userId).select('-password');

            next()
        } catch (error) {
            next(errorHandler(401, "Not authorized, invalid token"))
		}
	} else next(errorHandler(401, "Not authorized, no token"));
};
