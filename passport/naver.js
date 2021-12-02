import passport, { Passport } from 'passport'
import { Strategy as NaverStrategy } from 'passport-naver'
import User from '../models/User'

export default () => {
	passport.use(
		'naver',
		new NaverStrategy(
			{
				clientID: 'wQrpXI8o9wRR02h3oQax',
				clientSecret: 'IRRVb2IiFQ',
				callbackURL: 'http://localhost:5000/user/login/naver/callback'
			},
			function (accessToken, refreshToken, profile, done) {
				process.nextTick(function () {
					var user = {
						name: profile.displayName,
						email: profile.emails[0].value,
						username: profile.displayName,
						provider: 'naver',
						naver: profile._json
					}
					console.log('user=')
					console.log(user)

					return done(null, user)
				})
			}
		)
	)
}
