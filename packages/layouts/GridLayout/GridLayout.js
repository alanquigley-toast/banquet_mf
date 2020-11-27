import React from 'react'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'
import { object } from 'prop-types'

export const GridLayout = ({ slotA }) => {
  return (
    <div className='grid col-gap-2 grid-cols-2'>
      <Parcel
        mountParcel={mountRootParcel}
        config={() => import('child_spa/Banquet')}
      />
    </div>
  )
}

GridLayout.propTypes = {
  slotA: object
}
