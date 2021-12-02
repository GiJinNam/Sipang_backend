import express from 'express'
import request from 'request'
import Gym from '../models/OpenapiGym'

const router = express.Router()

const addr =
	'https://openapi.gg.go.kr/PublicGameOfBallGymnasium?Type=json&SIGUN_NM='
const url = addr + encodeURI('성남시')

router.get('/', function (req, res, next) {
	request(url, function (error, response, body) {
		if (error) {
			console.log(error)
		}
		const obj = JSON.parse(body)
		return res.json(obj)
	})
})

export default router
