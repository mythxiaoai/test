let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin")
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            //js默认就是调用的这个插件，所以这个需要添加，可能是写这个会被覆盖
            new UglifyjsWebpackPlugin({
                cache: true,//是否缓存
                parallel: true,//是否并发打包
                sourceMap: true,//是否需要源码映射
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    devServer: {
        port: "3000",
        progress: true, //进度条
        contentBase: "./dist", //静态服务的文件目录
        compress: true //是否压缩
    },
    mode: "development",//模式, 默认两种 production development //production可以压缩
    entry: "./src/index.js",
    output: {
        // //加hash   默认长度是20位 可以在后面打上:len生成指定长度的hash  filename: "bundle.[hash:7].js",
        filename: "bundle.js", //打包后的文件名
        path: path.resolve(__dirname, "dist") //路径必须是一个绝对路径
    },
    module: {
        //规则的执行顺序是从下到下
        rules: [
          /*  {
                test: /\.js$/,
                use: {
                    loader: "eslint-loader",
                    options:{
                        enforce: "pre"//previous 在最前执行
                    }
                }
            }, */
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {
                                "legacy": true
                            }],
                            //宽松模式
                            ["@babel/plugin-proposal-class-properties", {
                                "loose": true
                            }],
                            //运行时包
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include: path.resolve(__dirname, "src"),
                exclude: "/node_modules/",
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }, {
                test: /\.scss$/,
                //规则从下至上解析
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }

        ]
    },
    //放着所有webpack插件的数组
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            fileanem: "index.html",
            minify: {
                //去除双引符号
                removeAttributeQuotes: true,
                //去除空行
                collapseWhitespace: true,
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
            //filename: "style.[hash:7].css"
            filename: "style.css"
        })
    ]

}
