var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	entry:  './src/App.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.css$/,
			loaders: ["style", "css?modules"],
			exclude: /node_modules/
		}]
	},
	plugins: [
		new LiveReloadPlugin()
	]
};
