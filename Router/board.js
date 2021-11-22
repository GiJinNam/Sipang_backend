import express from 'express'
import Board from '../models/Board.js'

const router = express.Router()

/*
 * POST /board
 * 프론트에서 값을 넘겨주면 데이터베이스에 저장
 */

router.post('/', async (req, res) => {
	try {
		const { title, content } = req.body
		if (!title || !content) {
			return res.status(400).json({ message: '빈 값이 있으면 안됩니다..' })
		}
		const newBoard = await Board.create({
			title: title,
			content: content
		})
		newBoard.save()
		return res.status(200).json({ message: '잘 받았읍니다' })
	} catch (error) {
		console.error(error)
		return res.status(500).send(error)
	}
})

/**
 *  GET /board
 *  게시판 메인화면에서 데이터 뿌려주는 코드 ()
 */

router.get('/', async (req, res) => {
	try {
		const board = await Board.find()
		return res.status(200).json(board)
	} catch (error) {
		console.error(error)
		return res.status(500).json(error)
	}
})

export default router
