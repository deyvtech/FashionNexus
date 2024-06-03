import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const signup = async (request, response, next) => {
	const { firstName, lastName, emailAddress, password } = request.body;

	console.log(request.body);
	try {
		const existingUser = await User.findOne({ email: emailAddress });
		if (existingUser)
			return response.status(403).send({ msg: "User already exist" });

		const hashedPassword = bcrypt.hashSync(password, 10);
		const newUser = new User({
			name: firstName + " " + lastName,
			email: emailAddress,
			password: hashedPassword,
		});

		await newUser.save();
		return response.status(201).send({ msg: "Create user successfully" });
	} catch (error) {
		next(error);
		// Custom Error
		// next(errorHandler(500, 'Custom error'))
	}
};

export const signin = async (request, response, next) => {
	const { emailAddress, password } = request.body;

	try {
		const validUser = await User.findOne({ email: emailAddress });
		const comparePassword = bcrypt.compareSync(password, validUser.password);
		if (!comparePassword)
            return response.status(401).send({ msg: "Invalid credentials" });
    
        // Create token
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...user } = validUser._doc;
        response.cookie("access_token", "Bearer " + token, { 
            expires:  new Date(Date.now() + 1 * 3600000), 
            httpOnly: true, 
            secure: true, 
            sameSite: 'Lax',
            path: '/' // Cookie is accessible on all routes
        }).status(200).json(user);

	} catch (error) {
		next(error);
	}
};

export const testing = (request, response) => {
	response.status(200).json({msg: 'api runnng'})

}