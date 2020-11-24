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
      name: 'app_01',
      filename: 'remoteEntry.js',
      // library: { type: 'system', name: 'App2' },
      library: { type: 'var', name: 'app_01' },
      exposes: { './App': './src/App' },
      shared: {
        ...deps,
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        }
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
