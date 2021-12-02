import express from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User'
import passport from 'passport'
import { isLoggedIn, isNotLoggedIn } from '../middleware/auth'

const router = express.Router()

/*
 * 회원가입
 */

/*
//회원정보 만들기.
//GET /user
router.get('/', async (req, res) => {
	try {
		if (req.user) {
			const user = await User.findOne({ id: req.user.id })
			return res.status(200).json(user) // 
		} else {
			return res.status(200).json(null)
		}
	} catch (error) {
		console.error(error)
		return res.status(500).json(error)
	}
})
*/

// POST /user
// 회원가입시 이메일 중복 체크 및 빈값 체크용도
router.post('/', isNotLoggedIn, async (req, res) => {
	try {
		const { email, name, password } = req.body
		// 빈 값 체크
		if (!email || !name || !password) {
			return res.status(400).json({ message: '빈 값이 있으면 안됩니다.' })
		}
		// 이메일 중복체크
		const exUser = await User.findOne({ email })
		if (exUser) {
			return res.status(400).json({ message: '이미 사용중인 이메일 입니다!' })
		}
		// bcrypt로 비밀번호 암호화 (비동기)
		const hashedPassword = await bcrypt.hash(password, 12)
		// 받은 데이터로 db에 저장, 비동기 처리
		await User.create({ email, name, password: hashedPassword })
		return res.status(200).json({ message: '회원가입에 성공했습니다!' })
	} catch (error) {
		console.error(error)
		return res.status(500).json(error.message)
	}
})

//POST /user/login (미들웨어 확장)
/*
 * 로그인
 */

router.post('/login', isNotLoggedIn, (req, res) => {
	passport.authenticate('local', (err, user, info) => {
		//첫번째 인자값 서버에러
		if (err) {
			console.error(err)
			return res.status(500).json({ message: err })
		}
		//세번째 클라이언트 에러
		if (info) {
			return res.status(400).json({ message: info.message })
		}
		//에러없이 성공할 경우
		return req.login(user, loginErr => {
			//passport 로그인중에 에러가 발생했을 때,
			if (loginErr) {
				console.error(loginErr)
				return res.status(500).json(loginErr)
			}
			return res.status(200).json(user)
		})
	})(req, res) //즉시실행함수
})

//로그아웃
//POST /user/logout
router.post('/logout', isLoggedIn, (req, res) => {
	req.logout()
	req.session.destroy()
	return res.status(200).json({ message: '로그아웃 되었습니다!!' })
})

// GET /user/auth/naver
/* naver 로그인 연동
 *
 */
/**

router.get(
	'auth/naver',
	passport.authenticate('naver', null),
	function (req, res) {
		console.log('/main/naver')
	}
)
*/
router.get(
	'/auth/naver',
	passport.authenticate('naver', { scope: ['profile', 'email'] })
)

//처리 후 callback 처리 부분 성공/실패 시 리다이렉트 설정
router.get(
	'/naver/callback',
	passport.authenticate('naver', {
		successRedirect: '/',
		failureRedirect: '/auth/login'
	})
)
export default router
