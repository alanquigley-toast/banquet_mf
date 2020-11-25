import React from 'react'
import { Button } from '@toasttab/buffet-pui-buttons'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'

export function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Parcel
        mountParcel={mountRootParcel}
        config={() => import('app_01/Banquet')}
      />
      <Button>App2 Button</Button>
    </div>
  )
}
