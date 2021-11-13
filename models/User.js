import mongoose from 'mongoose'
import shortId from 'shortid'

const userId = shortId.generate()

const userSchema = new mongoose.Schema(
	{
		userId: { type: String, default: userId },
		email: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		password: { type: String, required: true }
	},
	{ timestamps: true }
)

const User = mongoose.model('user', userSchema)
export default User
