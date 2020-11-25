import React from 'react'
import App1 from 'app_01/App'
import { Button } from '@toasttab/buffet-pui-buttons'
import cx from 'classnames'

export function App() {
  return (
    <div>
      <h1>hello world</h1>
      <App1 />
      <Button>App2 Button</Button>
    </div>
  )
}
