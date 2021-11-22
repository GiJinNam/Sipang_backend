import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import hpp from 'hpp'
import helmet from 'helmet'
import { MONGO_URI, COOKIE_SECRET } from './config/index'
import gymRouter from './router/gym'
import userRouter from './router/user'
import boardRouter from './router/board'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import passportConfig from './passport'

const app = express()
const origin = 'http://localhost:3000'
const PORT = process.env.PORT || 5000
const sessionOption = {
	saveUninitialized: true,
	resave: false,
	secret: COOKIE_SECRET,
	rolling: true,
	cookie: {
		secure: false,
		maxAge: process.env.DEBUG === '1' ? Infinity : 1000 * 60 * 30
	}
}

app.use(hpp())
app.use(helmet())
app.use(cors({ origin, credentials: true }))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(COOKIE_SECRET))
app.use(session(sessionOption))
app.use(passport.initialize())
app.use(passport.session())

const server = async () => {
	try {
		await mongoose.connect(MONGO_URI)
		console.log('몽고 DB 연결성공!!')
		passportConfig()
		app.use('/gym', gymRouter)
		app.use('/user', userRouter)
		app.use('/board', boardRouter)
		app.listen(PORT, () => {
			return console.log('express 서버 시작합니ㅏ~~~~~~~')
		})
	} catch (error) {
		console.error(error)
	}
}

server()
