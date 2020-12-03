const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'app.js',
        chunkFilename: "[id].[chunkhash].js",
        publicPath: '/'
    },
    devServer: {
        port: 8888, // Defaults to 8080
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: {
            rewrites: [{
                from: /.*/g,
                to: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
            }]
        },
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: [
                    'vue-loader',
                    {
                        loader: path.resolve(__dirname, './loader/MdToVue.js'),
                        options: {
                            html: true
                        }
                    }
                ]
            },
            { 
                test: /\.(css|scss|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass')
                        }
                    }
                ]
            },
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    performance: {
        hints:'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            Vue: 'Vue',
            'vue-router': 'VueRouter',
            '@': path.resolve(__dirname, './src')
        }
    },
    mode: 'production'
};
var a = process.env.NODE_ENV
console.log("process.env.NODE_ENV", process.env.NODE_TYPE)

// 打包组件
if (process.env.NODE_TYPE == 'package') {
      module.exports.devtool = '#source-map'
      module.exports.entry = './src/index.js';
      module.exports.output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'dx-web-com.min.js',
        library: 'dxWebCom', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
      };
  
      // Banner
      var moment = require('moment');
      var pkg = require('./package.json');
      var banner = 'dx-web-com \nversion: ' + pkg.version + ' \nrepo: https://github.com/sun142725/dx-web-com \nbuild: ' + moment().format('YYYY-MM-DD HH:mm:ss')
      module.exports.plugins.push(
        new webpack.BannerPlugin({ 
          banner: banner,
          entryOnly: true 
        })
      );
  }

// 打包文档
  if(process.env.NODE_TYPE == 'doc'){
    module.exports.output.publicPath = './'
    // Banner
    var moment = require('moment');
    var pkg = require('./package.json');
    var banner = 'dx-web-com docs \nversion: ' + pkg.version + ' \nrepo: https://github.com/sun142725/dx-web-com \nbuild: ' + moment().format('YYYY-MM-DD HH:mm:ss')
    module.exports.plugins.push(
      new webpack.BannerPlugin({ 
        banner: banner,
        entryOnly: true 
      })
    );
  }