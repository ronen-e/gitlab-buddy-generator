module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "~@/styles/variables.scss";`
			},
			css: {
				modules: false
			},
		}
	}
}