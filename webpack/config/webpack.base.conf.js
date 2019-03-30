const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	css: 'css/',
	img: 'images/'
}

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: `${PATHS.src}`
	},
	output: {
		filename: 'js/[name].js', // имя конечного бандла
		path: PATHS.dist
		// publicPath: '/' // для css images html
	},
	//правила для модулей
	module:{
		rules:[{
			test: /\.js$/, //для каких файлов срабатывает 
			use: [{loader: 'babel-loader'}],
			},
			{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
			},
			{
			test: /\.scss$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: { sourceMap: true }
				},
				{
					loader: 'postcss-loader',
					options: { sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`} }
				},
				{
					loader: 'sass-loader',
					options: { sourceMap: true }
				}
			]
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: { sourceMap: true }
				},
				{
					loader: 'postcss-loader',
					options: { sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`} }
				}
				]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: 'css/[name].css'}),
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html'
		}),
		new CopyWebpackPlugin([
			{from: `${PATHS.src}/images`, to:`${PATHS.img}`},
			{from: `${PATHS.src}/static`, to:''},
			])
	]
}