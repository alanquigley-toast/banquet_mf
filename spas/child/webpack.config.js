const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies
const { merge } = require('webpack-merge')
const { singleSpaBase } = require('@toasttab/webpack-config')

module.exports = argv => {
  return merge(singleSpaBase, {
    entry: {
      index: './src/banquet.js'
    },
    output: {
      publicPath: `http://localhost:${argv.port}/`
    },
    devServer: {
      port: argv.port
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'child_spa',
        filename: 'remoteEntry.js',
        library: { type: 'system' },
        exposes: {
          './Banquet': './src/banquet.js'
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
