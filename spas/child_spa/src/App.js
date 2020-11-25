import React from 'react'
import { Button } from '@toasttab/buffet-pui-buttons'

export default function App(props) {
  return (
    <div className='space-y-2'>
      <h1>Child SPA {props.description}</h1>
      <Button>Child Button</Button>
    </div>
  )
}
