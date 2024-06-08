import mongoose from "mongoose";
const { Schema, models, model } = mongoose;
import bcrypt from "bcryptjs";

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

/* This code snippet is a pre-save hook in Mongoose that is used to hash the user's password before
saving it to the database. Here's a breakdown of what it does: */
userSchema.pre('save', async function (next) {
	if (!this.isModified("password")) return next();
	try {
		this.password = bcrypt.hashSync(this.password, 10);
		next();
	} catch (error) {
		next(error);
	}
})


/* The `userSchema.methods.matchPassword` function is a custom method defined on the userSchema in
Mongoose. It is used to compare a provided password (loginPassword) with the hashed password stored
in the database for a user. */
userSchema.methods.matchPassword = async function (loginPassword) {
	return bcrypt.compareSync(loginPassword, this.password);
}


const User = models?.User || model('User', userSchema);
export default User