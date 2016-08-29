var webpack = require('webpack');
var path    = require('path');

module.exports = {
	// entry: [
	// 	//for hot loader: webpackDevServer host and port
	// 	'webpack-dev-server/client?http://localhost:3000',
	// 	//for hot loader: "only" prevents reload on syntax errors
	// 	//有些模块无法热替换，修改成dev-server即可（原因未知：可能是只更新react组件？）
	// 	'webpack/hot/dev-server',
	// 	//our app's entry point
	// 	'./src/index.js'
	// ],

	entry: {
		light: [
			//for hot loader: webpackDevServer host and port
			'webpack-dev-server/client?http://localhost:3000',
			//for hot loader: "only" prevents reload on syntax errors
			//有些模块无法热替换，修改成dev-server即可（原因未知：可能是只更新react组件？）
			'webpack/hot/dev-server',
			//our app's entry point
			'./src/index.js'
		]
		// test: [
		// 	//for hot loader: webpackDevServer host and port
		// 	'webpack-dev-server/client?http://localhost:3000',
		// 	//for hot loader: "only" prevents reload on syntax errors
		// 	//有些模块无法热替换，修改成dev-server即可（原因未知：可能是只更新react组件？）
		// 	'webpack/hot/dev-server',
		// 	//our app's entry point
		// 	'./src/index.js'
		// ]
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'src'),
			loaders: ["react-hot", "babel"]
		}, {
			test: /\.scss$/,
			include: path.join(__dirname, 'public/css'),
			loaders: ["style", "css", "sass"]
		}]
	},

	resolve: {
		extensions: ["", ".js", ".jsx"]
	},

	output: {
		path: __dirname + '/public/build',
		filename: '[name].bundle.js',
		publicPath: '/build'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};