const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const utils = require('./utils');
const base = require('./base');

module.exports = merge(base, {
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 7777,
    contentBase: path.resolve('public'),
    publicPath: '/',
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
