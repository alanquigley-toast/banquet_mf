// We put this in a tailwind.config.js so that the Tailwind CSS IntelliSense find it.
const baseConfig = require('@toasttab/buffet-pui-styles')
module.exports = {
  ...baseConfig,
  // If using css classes in files not covered by these globs you should extend this
  enabled: process.env.NODE_ENV === 'production' ? true : false,
  purge: [
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.css',
    // This is required to whitelist the tailwind utility classes used in the buffet-pui components.
    './node_modules/@toasttab/buffet-pui-*/dist/esm/index.js'
  ],
  // Change this to match the root id of your App.
  // extend plugins, this plugin provides css variables for the tailwind classes
  plugins: [...baseConfig.plugins],
  corePlugins: {}
}
