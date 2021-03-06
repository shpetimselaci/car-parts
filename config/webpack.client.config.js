const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");
const SWPrecachePlugin = require('sw-precache-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
module.exports = merge(baseConfig, {
	entry: {
		app: './src/entry-client.js'
	},
	resolve: {
		alias: {
			'axios-client': './axios-client.js'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module) {
				return (
					/node_modules/.test(module.context) &&
					!/\.css$/.test(module.request)
				)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),
		new SWPrecachePlugin({
			cacheId: 'car-parts',
			filename: 'service-worker.js',
			minify: 'true',
			dontCacheBustUrlsMatching: /./,
			staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
			runtimeCaching: [
				{
					urlPattern: '/',
					handler: 'networkFirst'
				}
			]
		}),
		new VueSSRClientPlugin()
	]
});
