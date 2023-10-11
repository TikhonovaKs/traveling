const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/pages/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: './src/index.html'
    // }),

    ...glob.sync('./src/*.html').map((htmlFile) => {
      return new HtmlWebpackPlugin({
        template: htmlFile,
        filename: path.basename(htmlFile),
      });
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|png|jpg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(ttf|woff|woff2)$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
