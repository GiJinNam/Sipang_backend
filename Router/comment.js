import express from 'express'
import Comment from '../models/Comment'
import { isValidObjectId } from 'mongoose'
import Board from '../models/Board'

const router = express.Router()

router.post('/:boardId', async (req, res) => {
	try {
		const { boardId } = req.params
		const { content } = req.body

		if (!isValidObjectId(boardId)) {
			return res.status(400).json({ message: '잘못된 게시물 번호입니다' })
		}
		if (content === '') {
			return res.status(400).json({ message: '빈 값이 있으면 안됩니다..' })
		}
		const board = await Board.findById(boardId)
		const comment = await Comment.create({
			content: content,
			board: board
		})
		await comment.save()
		return res.status(200).json(comment)
	} catch (error) {
		console.error(error)
		return res.status(500).send(error)
	}
})

router.get('/:boardId', async (req, res) => {
	try {
		const { boardId } = req.params
		if (!isValidObjectId(boardId)) {
			return res.status(400).json({ message: '잘못된 게시물 번호입니다.' })
		}
		const comment = await Comment.find({
			board: boardId
		})
		return res.status(200).json(comment)
	} catch (error) {
		console.error(error)
		return res.status(500).send(error)
	}
})

export default router
