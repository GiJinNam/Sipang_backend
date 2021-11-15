import express from 'express'
import Gym from '../models/Gym.js'

const router = express.Router()
/**
 * POST /gym
 * 체육관을 등록하는 API (나중에 어드민만 사용할 수 있도록 설정해야함)
 *
 */
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

/**
 * GET /gym
 * 모든 체육관 내용 가져와주는 API
 */
router.get('/', async (req, res) => {
	try {
		const gym = await Gym.find()
		return res.status(200).json(gym)
	} catch (error) {
		console.error(error)
		return res.status(500).json(error)
	}
})

/**
 * GET /gym/:id
 * 검색 내용으로 체육관 목록 찾아주는 API
 */
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params
		//name값에 받아온 id값이 포함되어 있는 데이터를 찾아서 gym에 넣음.
		const gym = await Gym.find({ name: { $regex: id } })
		if (gym.length === 0) {
			return res.status(400).json({ message: '검색결과가 없습니다.' })
		}
		return res.status(200).json(gym)
	} catch (error) {
		console.error(error)
		return res.status(500).json(error)
	}
})

export default router
