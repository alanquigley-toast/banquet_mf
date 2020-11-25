import singleSpaHtml from 'single-spa-html'

const htmlLifecycles = singleSpaHtml({
  template: '<h1>HELLO, I am plain html, loaded via single-spa-html</h1>'
})
export const bootstrap = htmlLifecycles.bootstrap
export const mount = htmlLifecycles.mount
export const unmount = htmlLifecycles.unmount
