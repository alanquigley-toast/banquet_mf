const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies
const { merge } = require('webpack-merge')
const { singleSpaBase } = require('@toasttab/webpack-config')

module.exports = argv => {
  return merge(singleSpaBase, {
    output: {
      publicPath: `http://localhost:${argv.port}/`
    },
    devServer: {
      port: argv.port
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'apollo_library_spa',
        filename: 'remoteEntry.js',
        library: { type: 'system' },
        exposes: {
          './MyApolloProvider': './src/MyApolloProvider/MyApolloProvider.jsx',
          './Books': './src/Books/Books.jsx'
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
    ]
  })
}
