var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),	
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'production',
	module: {
	    rules: [
	      {
	        test: /\.css$/i,
	        use: [MiniCssExtractPlugin.loader, "css-loader"],
	      },
	    ],
	  },
	optimization: {
	    minimizer: [
	      '...',
	      new CssMinimizerPlugin(),
	    ],
  	},
	plugins: [new MiniCssExtractPlugin()]
}