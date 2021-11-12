import express from 'express'
import { async } from 'regenerator-runtime'
import Gym from '../models/Gym'

const router = express.Router()

router.post('/', async (req, res) => {
	try {
		const { name, address, tel, coat, price } = req.body
		if (!name || !address || !tel || !coat || !price) {
			return res.status(400).json({ message: '빈 값이 있으면 안됩니다..' })
		}
		const newGym = await Gym.create({
			name: name,
			address: address,
			tel: tel,
			coat: coat,
			price: price
		})
		newGym.save()
		return res.status(200).json({ message: '잘 받았읍니다' })
	} catch (error) {
		console.error(error)
		return res.status(500).send(error)
	}
})

router.get('/', async (req, res) => {
	try {
		const gym = await Gym.find()
		return res.status(200).send(gym)
	} catch (error) {
		console.error(error)
		return res.status(500).send(error)
	}
})

export default router
