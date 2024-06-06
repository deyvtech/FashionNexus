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

// Hashing the password
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) next();

	this.password = bcrypt.hashSync(this.password, 10);
})

// Comparing the passwords for login credentials
userSchema.methods.matchPassword = async function (loginPassword) {
	return bcrypt.compareSync(loginPassword, this.password);
}

const User = models?.User || model('User', userSchema);
export default User