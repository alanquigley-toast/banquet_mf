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
        name: 'child_non_react_spa',
        filename: 'remoteEntry.js',
        library: { type: 'system' },
        exposes: {
          './Banquet': './src/banquet.js'
        },
        shared: {
          ...deps
        }
      })
    ]
  })
}
