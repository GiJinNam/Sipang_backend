import mongoose from 'mongoose'
import moment from 'moment'
const dateSet = moment().format('YYYY-MM-DD')

const boardScehma = new mongoose.Schema({
	title: { type: String, required: true },
	date: { type: String, default: dateSet },
	content: { type: String, required: true }
})

const Board = mongoose.model('board', boardScehma)

export default Board
