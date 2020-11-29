import singleSpaHtml from 'single-spa-html'

const htmlLifecycles = singleSpaHtml({
  template: props =>
    `<div class="p-4 rounded-lg bg-primary-25">
      <h1 class="text-heading-3">Plain html template ${props.description}</h1>
    </div>
    `
})

export const { bootstrap, mount, unmount } = htmlLifecycles
