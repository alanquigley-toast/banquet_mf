import singleSpaHtml from 'single-spa-html'

const htmlLifecycles = singleSpaHtml({
  template: props => `<h1>HELLO, I am plain html, ${props.description}</h1>`
})
export const bootstrap = htmlLifecycles.bootstrap
export const mount = htmlLifecycles.mount
export const unmount = htmlLifecycles.unmount
