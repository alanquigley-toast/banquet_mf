const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = {
  mode: 'development',
  devServer: {
    quiet: true,
    port: 8083,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'apollo_library_spa',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'apollo_library_spa' },
      exposes: {
        './MyApolloProvider': './src/MyApolloProvider',
        './Books': './src/Books'
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
}
