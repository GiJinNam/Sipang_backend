import passport from 'passport'
import local from './local'
import User from '../models/User'

export default () => {
	// user router에서 req.login 실행이 될 때 여기가 동시에 실행됨
	passport.serializeUser((user, done) => {
		console.log(user._id)
		done(null, user.id)
	})

	// 로그인 성공 이후 요청부터 매번 실행됨
	// id로 부터 사용자 정보를 복구 db를 통해서
	passport.deserializeUser(async (id, done) => {
		try {
			const user = await User.findOne({ id })
			// 정보를 복구해서 req.user에 값을 넣는다
			done(null, user)
		} catch (error) {
			console.error(error)
			done(error)
		}
	})

	// local passport 실행
	local()
}
