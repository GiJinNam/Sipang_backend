import mongoose from 'mongoose'

const gymSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		address: { type: String, required: true },
		tel: { type: String, required: true },
		coat: { type: Number, required: true },
		price: { type: Number, required: true }
	},
	{ timestamps: true }
)

const Gym = mongoose.model('gym', gymSchema)

export default Gym
