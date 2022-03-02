let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    devServer:{
        port:"3000",
        progress:true,//进度条
        contentBase:"./dist",//静态服务的文件目录
        compress:true //是否压缩
    },
    mode: "production", //模式, 默认两种 production development 
    entry: "./src/index.js", //入口
    output: {
        //加hash   默认长度是20位 可以在后面打上:len生成指定长度的hash
        filename: "bundle.[hash:8].js", //打包后的文件名
        path: path.resolve(__dirname, "dist") //路径必须是一个绝对路径
    },
    //放着所有webpack插件的数组
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            fileanem:"index.html",
            minify:{
                //去除双引符号
                removeAttributeQuotes:true,
                //去除空行
                collapseWhitespace:true,
            },
            //引入文件加入hash戳
            hash:true
        })
    ]
    
}
