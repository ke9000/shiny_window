var webpack = require("webpack");

module.exports = {
	entry: {
		//popup: "./src/js/main/popup.js",
		//capt: "./src/js/main/capt.js", //のちにsubmodule化
		//background: "./src/js/main/background.js",
		popup: "./src/js/new/main/popup.js",
		// background: "./src/js/new/main/background/js",
	},
	output: {
		filename: "./js/new/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	}
};