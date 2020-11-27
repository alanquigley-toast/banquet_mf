import React from 'react'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'
import { object } from 'prop-types'

export const GridLayout = ({ slotA, slotB, slotC }) => {
  return (
    <div className='grid col-gap-2 grid-cols-2'>
      <Parcel mountParcel={mountRootParcel} config={() => import(slotA.name)} />
      {slotB && (
        <Parcel
          mountParcel={mountRootParcel}
          config={() => import(slotB.name)}
        />
      )}
      {slotC && (
        <Parcel
          wrapClassName='col-span-2'
          mountParcel={mountRootParcel}
          config={() => import(slotC.name)}
        />
      )}
    </div>
  )
}

GridLayout.propTypes = {
  slotA: object,
  slotB: object,
  slotC: object
}
