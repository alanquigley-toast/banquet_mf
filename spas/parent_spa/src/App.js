import React from 'react'
import { Button } from '@toasttab/buffet-pui-buttons'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'

export function App() {
  return (
    <div className='p-8 space-y-4'>
      <h1>Parent SPA</h1>
      <Button>Parent Button</Button>
      <Parcel
        wrapClassName='p-4 bg-gray-25 rounded'
        mountParcel={mountRootParcel}
        config={() => import('child_spa/Banquet')}
      />
    </div>
  )
}
