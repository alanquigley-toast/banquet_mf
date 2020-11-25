const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'child_spa',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'child_spa' },
      exposes: {
        './App': './src/App',
        './Banquet': './src/Banquet'
      },
      shared: {
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
        ...deps
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
