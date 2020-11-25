module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss'),
    require('postcss-url'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 4,
      features: {
        'custom-properties': true
      }
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-reporter')({ clearAllMessages: true })
  ]
}
