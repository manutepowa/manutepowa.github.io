// const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	devtool: 'eval',
	entry: './src/index.jsx',
	output: {
		path: './build/',
		filename: 'build.js'
	},
	devServer: {
		host: '0.0.0.0',
	    inline: true,
	    port: 3000
	  },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/,
		        query: {
		          presets: ['es2015', 'react','stage-0']
		        }
			},
			{ 
				test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	plugins: [
        new ExtractTextPlugin('css/main.css', {
            allChunks: true
        })
    ]
}