module.exports = {
	entry: './src/App.js',
	output: {
		filename: 'bundle.js',
		path: './public'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel'}
		]
	}
};