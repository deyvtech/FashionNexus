import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
export const signup = async (request, response, next) => {
	const { firstName, lastName, emailAddress, password } = request.body;
	try {
		const existingUser = await User.findOne({ email: emailAddress });
		if (existingUser)
			return response.status(403).send({ msg: "User already exists" });

		// const hashedPassword = bcrypt.hashSync(password, 10);
		const newUser = await User.create({
			name: firstName + " " + lastName,
			email: emailAddress,
			password: password,
		});

		if (newUser) {
			generateToken(response, newUser._id)
			return response.status(201).json({
				msg: "Create user successfully",
				_id: newUser._id,
				name: newUser.name,
				email: newUser.email,
			});
		}
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

		if (!(await validUser.matchPassword(password)))
			return response.status(401).send({ msg: "Invalid credentials", login: false });

		// Exclude password
		const { password: userPassword, ...user } = validUser._doc;
		
		generateToken(response, validUser._id)
		return response.status(200).json({msg: "Login successfully", login: true,  ...user});
		
	} catch (error) {
		next(error);
	}
};
