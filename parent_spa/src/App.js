import React from 'react'
import { Button } from '@toasttab/buffet-pui-buttons'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'

export function App() {
  return (
    <div>
      <h1>Parent SPA</h1>
      <Button>Parent Button</Button>
      <Parcel
        mountParcel={mountRootParcel}
        config={() => import('child_spa/Banquet')}
      />
    </div>
  )
}
