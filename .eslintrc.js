module.exports = {
	extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
	rules: {
		'no-console': 0
	},
	eslintConfig: {
		parserOptions: {
			parser: 'babel-eslint',
			sourceType: 'module',
			allowImportExportEverywhere: true
		}
	}
}
