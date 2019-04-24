const path = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');
const webpackConfig = require('./webpack/dev');
const webpackDevMiddlewareHardDisk = require('webpack-dev-middleware-hard-disk');

const compiler = webpack(webpackConfig);

(async () => {
  try {
    await fs.emptyDirSync(path.resolve('dist'));
    /**
     * 参数配置
     * https://webpack.js.org/configuration/dev-server/
     **/
    await webpackDevMiddlewareHardDisk(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
      },
    });
    await fs.copySync(path.resolve('src', 'static'), path.resolve('dist', 'static'));
  } catch (error) {
    console.error(error);
  }
})();
