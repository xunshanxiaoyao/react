const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
	entry: { //指定资源文件的路径
		app: path.join(__dirname, '../client/app.js')
	},
	output: { //指定输出文件的路径
		filename: '[name].[hash].js',

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname,'../client/template.html')
		})
	]
})

if(isDev){
	config.entry = {
		app: [
			'react-hot-loader/patch',
			path.join(__dirname, '../client/app.js')
		]
	}
	config.devServer = {
		host: '0.0.0.0',
		port: '9999',
		contentBase: path.join(__dirname, '../dist'),
		hot: true,
		overlay: {
			errors: true
		},
		publicPath: '/public',
		historyApiFallback: {
			index: '/public/index.html'
		}
	}
	config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
