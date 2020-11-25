const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
// const { classnames, ...deps } = require('./package.json').dependencies
const deps = require('./package.json').dependencies

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8081,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'app_02',
      filename: 'remoteEntry.js',
      // This is required if you want to attach the library to the window object - with this
      // approach care should be taken to avoid global naming conflicts.
      library: { type: 'var', name: 'app_02' },
      // By using the global we can specify the remoteEntry files in the html, rather than
      // the webpack config. I believe this is a more suitable approach for Toast.
      remotes: {
        app_01: 'app_01'
      },
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
