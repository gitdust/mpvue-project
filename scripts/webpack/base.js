const NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MpvuePlugin = require('webpack-mpvue-asset-plugin');
const MpvueWebpackTarget = require('mpvue-webpack-target');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const relative = require('relative');

const fs = require('fs');

const paths = [];

const getEntry = (rootSrc) => {
  const map = {};
  glob.sync(path.resolve(rootSrc, 'pages/**/main.js')).forEach((file) => {
    const key = relative(rootSrc, file).replace('.js', '');
    const currPath = relative(rootSrc, file).replace(/\\/g, '/').replace('/main.js', '');
    paths.push(currPath);
    map[key] = file;
  });
  return map;
};

const appEntry = { app: path.resolve('src', 'main.js') };
const pagesEntry = getEntry(path.resolve('src'), 'pages/**/main.js');
const entry = Object.assign({}, appEntry, pagesEntry);


// 读取src/app.json文件，自动化写入subPackages数组对象。
const autoSubPachages = () => {
  let mainPacjages = [];
  const pathObject = path.resolve('src', 'app.json');
  fs.readFile(pathObject, 'utf8', (err, data) => {
    if (err) throw err;
    const configJson = JSON.parse(data);
    configJson.subPackages = [];
    mainPacjages = configJson.pages;
    paths.forEach((root) => {
      if (!mainPacjages.includes(`${root}/main`)) {
        configJson.subPackages.push({
          root,
          pages: [
            'main',
          ],
        });
      }
    });
    fs.writeFile(pathObject, JSON.stringify(configJson, null, 2), 'utf8', (e) => {
      if (e) throw e;
    });
  });
};

autoSubPachages();

const vueLaderConfig = ExtractTextPlugin.extract({
  fallback: 'vue-style-loader',
  use: [
    {
      loader: 'css-loader',
    },
    {
      loader: 'px2rpx-loader',
      options: {
        baseDpr: 1,
        rpxUnit: 1,
      },
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'less-loader',
      query: {
        javascriptEnabled: true,
      },
    },
  ],
});

module.exports = {
  entry,
  target: MpvueWebpackTarget,
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'mpvue-loader',
            options: {
              loaders: {
                css: vueLaderConfig,
                less: vueLaderConfig,
              },
              transformToRequire: {
                video: 'src',
                source: 'src',
                img: 'src',
                image: 'xlink:href',
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [
          'babel-loader?cacheDirectory=true&compact=false',
          'mpvue-loader?checkMPEntry=true',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'url-loader?limit=30000&name=static/img/[name]-[hash:5].[ext]',
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: 'file-loader?name=static/media/[name]-[hash:5].[ext]',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'url-loader?name=static/fonts/[name]-[hash:5].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${NODE_ENV}"`,
    }),
    new MpvuePlugin(),
    new CopyWebpackPlugin([{
      from: '**/*.json',
      to: '',
    }], {
      context: 'src/',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common/vendor',
      minChunks: (module, count) => (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf('node_modules') >= 0) || count > 1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common/manifest',
      chunks: ['common/vendor'],
    }),
    new ExtractTextPlugin({
      filename: '[name].wxss',
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'mpvue',
      '@': path.resolve('src'),
      styles: path.resolve('src', 'style'),
    },
  },
};
