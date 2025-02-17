const { watch } = require('fs')
const path = require('path')
const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-custom-properties'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer'),
]
module.exports = {
	mode: 'development',
	entry: './app/assets/scripts/App.js',
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app'),
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { url: false } },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: { plugins: postCSSPlugins },
						},
					},
				],
			},
		],
	},
}
