import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";


export const signup = async (request, response, next) => {
	const { firstName, lastName, emailAddress, password } = request.body;
	try {
		const existingUser = await User.findOne({ email: emailAddress });
		if (existingUser)
			return response.status(403).json({ msg: "User already exists" });

		// const hashedPassword = bcrypt.hashSync(password, 10);
		const newUser = await User.create({
			name: firstName + " " + lastName,
			email: emailAddress,
			password: password,
		});

		if (newUser) {
			generateToken(response, newUser._id);
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
			return response
				.status(401)
				.json({ msg: "Invalid credentials", login: false});

		// Exclude password
		// const { password: userPassword, ...user } = validUser._doc;

		generateToken(response, validUser._id);
		return response
			.status(200)
			.json({ msg: "Login successfully", login: true });
	} catch (error) {
		next(error);
	}
};

export const logout = (request, response) => {
	response.cookie("jwt", "", {
		httpOnly: true,
		expires: new Date(0),
	});
	return response.status(200).json({ msg: "Logged out successfully", login: false });
};

export const getUser = async (request, response) => {
	const user = {
		_id: request.userData._id,
		name: request.userData.name,
		email: request.userData.email,
	};

	response.status(200).json(user);
};

export const updateUser = async (request, response) => {
	const { firstName, lastName, emailAddress, password } = request.body;
	try {
		const user = await User.findById(request.user._id);
		if (user) {
			user.name = firstName + " " + lastName || user.name;
			user.email = emailAddress || user.email;
			if (password) {
				user.password = password;
			}

			const updatedUser = await user.save();
			response.status(200).json(updatedUser);
		} else {
			response.status(404).json({ msg: "User not found" });
		}
	} catch (error) {
		next(error);
	}
};