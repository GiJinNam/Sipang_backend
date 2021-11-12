import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import hpp from 'hpp'
import helmet from 'helmet'
import { MONGO_URI } from './config/index.js'
import gymRouter from './Router/gym.js'

const app = express()
const origin = 'http://localhost:3000'
const PORT = process.env.PORT || 5000

app.use(hpp())
app.use(helmet())
app.use(cors({ origin, credentials: true }))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = async () => {
	try {
		await mongoose.connect(MONGO_URI)
		console.log('몽고 DB 연결성공!!')
		app.use('/gym', gymRouter)
		app.listen(PORT, () => {
			return console.log('express 서버 시작합니ㅏ~~~~~~~')
		})
	} catch (error) {
		console.error(error)
	}
}

server()
