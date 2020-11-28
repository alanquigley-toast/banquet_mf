import React from 'react'
import { Button } from '@toasttab/buffet-pui-buttons'

export default function App({ description }) {
  return (
    <div className='space-y-2'>
      <h1>Child SPA {description}</h1>
      <Button>Child Button</Button>
    </div>
  )
}
