const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
// const { classnames, ...deps } = require('./package.json').dependencies
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
      name: 'app_01',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'app_01' },
      exposes: { './App': './src/App' },
      shared: {
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
        ...deps
        // classnames: '^2.2.6'
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
