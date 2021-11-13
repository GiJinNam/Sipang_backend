import passport, { Passport } from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/User'
import bcrypt from 'bcrypt'
export default () => {
	passport.use(
		//LocalStrategy(오브젝트 , 콜백함수)
		new LocalStrategy(
			{
				usernameField: 'email',
				passwordField: 'password'
			},
			async (email, password, done) => {
				try {
					// 첫번째로 DB에 이메일이 있는지 검사.
					const user = await User.findOne({ email })
					if (!user) {
						//done(서버에러,성공,클라이언트 에러)
						return done(null, false, { message: '존재하지 않는 이메일입니다.' })
					}
					// 두번째로 비밀번호 비교. compare(입력받은 pw, db의 암호화된 패스워드)
					const res = await bcrypt.compare(password, user.password)
					if (res) {
						//비밀번호가 일치할 때, 사용자 정보를 넘겨줌
						return done(null, user)
					}
					//비밀번호가 일치하지 않을 때
					return done(null, false, { message: '비밀번호가 틀렸습니다.' })
				} catch (error) {}
				console.error(error)
				return done(error)
			}
		)
	)
}
