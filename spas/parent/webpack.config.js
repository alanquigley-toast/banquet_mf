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
        name: 'parent_spa',
        filename: 'remoteEntry.js',
        library: { type: 'system' },
        remotes: {
          child_spa: 'child_spa',
          child_non_react_spa: 'child_non_react_spa',
          apollo_library_spa: 'apollo_library_spa'
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
