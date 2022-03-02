const Webpack = require("webpack");
module.exports = {
	mode:"development",
	entry: ['babel-polyfill',  __dirname +"/async-awaitS.js"],
   // entry: __dirname +"/promise/test.js",
    output:{
        path:__dirname +"/dest/",
        filename:"async-awaitS.js",
    },
   module:{
   	rules:[
		{
			test:/\.js$/,
			exclude:/node_modules/,
			//use:"babel-loader",
			use:{
				loader:"babel-loader",
				options:{
					"presets": ["env"]
				}
			}
		}
   	]
   }
}