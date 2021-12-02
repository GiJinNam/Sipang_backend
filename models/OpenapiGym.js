import mongoose from 'mongoose'

const ApiGymSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		event: { type: String, required: true },
		addr: { type: String, required: true },
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true }
	},
	{ timestamps: true }
)

const Apigym = mongoose.model('apigym', ApiGymSchema)

export default Apigym
