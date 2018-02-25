const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: { //指定资源文件的路径
		app: path.join(__dirname, '../client/app.js')
	},
	output: { //指定输出文件的路径
		filename: '[name].[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/public', //引用时的路径
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
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname,'../client/template.html')
		})
	]
}