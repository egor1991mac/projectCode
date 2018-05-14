const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode:'development',
    entry:path.resolve(__dirname,'./src/pages/home/index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js',
    },
    devtool:'eval',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        index:'index.html',
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              },
             
              {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
              },
              {
                test: /\.jade$/,
                loader:'jade-loader'
              },
              
              {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'images/'
                      }
                  }
                ]
              }
            
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'home page',
            template:'./src/pages/home/template.jade',
            filename:'index.html',
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        //new ExtractTextPlugin('style.css')
    ]

}

