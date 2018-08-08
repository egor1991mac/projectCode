const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode:'development',
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js',
    },
    devtool:'eval',
    devServer: {
        contentBase: path.join(__dirname, "../../../Github/egor1991mac.github.io"),
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
              },
              {
                test: /\.jade$/,
                loader:'jade-loader',
                options:{
                    pretty:true
                }
              },
              
              {
                test: /\.(png|jpg|gif|svg|mov|mp4)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath:'img/'
                      }
                  }
                ]
              }
            
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/template.jade',
           
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            'Waves': 'node-waves',
            bootstrap: 'bootstrap',
           
           // masonry:'masonry-layout'
            //video: 'video'
        }),
        new ExtractTextPlugin('style.css')
        
    ]

}

