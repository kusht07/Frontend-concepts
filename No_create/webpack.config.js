const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/app.js',              // entry point
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index_bundle.js'              // create a folder and cretae index_bundle  file of all the modules
    },
      //output type of our code      
    module : {
        rules: [
            { test: /\.js$/, use :'babel-loader' },
            { test: /\.css$/, use : ['style-loader','css-loader']}
        ]
    },
    mode :'development',
    plugins : [
        new HtmlWebpackPlugin({
            template:'app/index.html'
        })
    ]
}