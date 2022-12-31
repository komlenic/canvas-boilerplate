const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@'        : path.resolve('src'),
      '@js'      : path.resolve('src/js'),
      '@styles'  : path.resolve('src/styles'),
      '@imgages' : path.resolve('src/images'),
      '@audio'   : path.resolve('src/audio'),
    },
  },
  entry: './src/js/canvas.js',
  output: {
    path: __dirname + '/dist/',
    filename: './js/canvas.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|mp3|wav|css)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[ext]',
              context: 'src',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*'],
      notify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'src/index.html',
    }),
  ],
  watch: true,
  devtool: 'source-map',
};
