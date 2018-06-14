// webpack must use commonjs writing method
let path = require('path');
console.log(path.resolve('./dist'));

let HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * single file 
 */
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist'),// path must be absolute path
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude: /node_modules/ },
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/, use:['url-loader?limit=8192']},
            {test:/\.(eot|svg|woff|woff2|wtf)$/, use:['url-loader']},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            // filename:'login.html',
        })
    ]

};


/**
 * multiple file 
 */
// module.exports = {
//     entry:{
//         main:'./src/main.js',
//         main2:'./src/main2.js'
//     },
//     output:{
//         filename:'[name].js',
//         path:path.resolve('./dist'),// path must be absolute path
//     }
// } 