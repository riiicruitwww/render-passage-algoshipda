const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/app.tsx'),
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new TSLintPlugin({
      config: './tslint.json',
      files: ['./src/**/*.tsx', './src/**/*.ts'],
    }),
    new HtmlWebpackPlugin({
      template: './src/assets/index.ejs',
    })
  ]
}