const isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) {
		next()
	} else {
		return res.status(401).json({ message: '로그인이 필요합니다!' })
	}
}

const isNotLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		next()
	} else {
		return res
			.status(401)
			.json({ message: '로그인 하지 않은 사용자만 접근 가능합니다.' })
	}
}

export { isLoggedIn, isNotLoggedIn }
