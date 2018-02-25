const path = require('path')

module.exports = {
	target: "node",
	entry: { //指定资源文件的路径
		app: path.join(__dirname, '../client/server-entry.js')
	},
	output: { //指定输出文件的路径
		filename: 'server-entry.js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/public', //引用时的路径
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [
			{
				test: /.jsx$/,
				loader: 'babel-loader'
			},
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')
				]
			}
		]
	}
}