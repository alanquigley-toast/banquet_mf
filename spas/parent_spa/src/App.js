import React from 'react'
import { Button } from '@toasttab/buffet-pui-buttons'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'
import ChildApp from 'child_spa/App'

export function App() {
  return (
    <div className='p-8 space-y-4'>
      <h1>Parent SPA</h1>
      <Button>Parent Button</Button>
      <Parcel
        description='single-spa-react loaded into a Parcel'
        wrapClassName='p-4 bg-gray-25 rounded'
        mountParcel={mountRootParcel}
        config={() => import('child_spa/Banquet')}
      />
      <Parcel
        description='single-spa-html loaded into a Parcel'
        wrapClassName='p-4 bg-gray-25 rounded'
        mountParcel={mountRootParcel}
        config={() => import('child_non_react_spa/Banquet')}
      />
      <ChildApp description='component App directly from MF' />
    </div>
  )
}
