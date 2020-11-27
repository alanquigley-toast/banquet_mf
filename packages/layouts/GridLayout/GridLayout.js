import React from 'react'
import { Parcel } from '@toasttab/banquet-tools'
import { object } from 'prop-types'

export const GridLayout = ({ slotA, slotB, slotC }) => {
  return (
    <div className='grid col-gap-2 grid-cols-2'>
      <Parcel className='col-span-2 p-8 bg-teal-75 rounded-lg' {...slotA} />
      <Parcel {...slotB} />
      <Parcel {...slotC} />
    </div>
  )
}

GridLayout.propTypes = {
  slotA: object,
  slotB: object,
  slotC: object
}
