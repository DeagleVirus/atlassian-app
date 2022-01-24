const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './index.jsx',
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},

		port: 8000,
	},

	resolve: {
		extensions: ['.js', '.json', '.jsx'],
	  },

	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
		}),

		new CleanWebpackPlugin(),

		new SourceMapDevToolPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			  },

			{
				test: /\.m?jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
				
			},
		],
	},
}
