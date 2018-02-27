const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig, {
	target: "node",
	entry: { //指定资源文件的路径
		app: path.join(__dirname, '../client/server-entry.js')
	},
	output: { //指定输出文件的路径
		filename: 'server-entry.js',
		libraryTarget: "commonjs2"
	}
})
