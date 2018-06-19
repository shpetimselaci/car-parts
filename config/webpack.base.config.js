const path = require("path")
const webpack = require("webpack")
const merge = require ("webpack-merge")
const utils = require ("./utils")
const config = require("../config1")
const CompressionPlugin = require("compression-webpack-plugin")
const vueLoaderConfig = require('./vue.loader.config.js')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.NODE_ENV === 'testing'
  ? require('../config1/test.env')
  : require('../config1/prod.env')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports =  merge({
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: false,
      usePostCSS: true
    })
  }},{
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: '[name].[chunkhash].js'
	},
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },	module: {
		noParse: /es6-promise\.js$/,
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
          // enable CSS extraction
          extractCSS: true
        }
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {	presets: ['es2015'] }
				}
			},
			{
				test:/\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	 node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
	performance: {
		maxEntrypointSize: 300000,
		hints: 'warning'
	},
	plugins: [
	new webpack.DefinePlugin({
      'process.env': env
    }),
        new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
		 new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true, map: { inline: false }}
    }),
			new ExtractTextPlugin({
				filename: 'common.[chunkhash].css'
			}),
			    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
		]
})
