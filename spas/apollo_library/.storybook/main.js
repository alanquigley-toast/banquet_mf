const { singleSpaBase } = require('@toasttab/webpack-config')
module.exports = {
  "stories": [
    "../src/**/*.story.mdx",
    "../src/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.module.rules.push(...singleSpaBase.module.rules) 
    return config
  }
}