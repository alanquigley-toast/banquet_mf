import React from 'react'
import { Parcel } from '@toasttab/banquet-tools'
import { func } from 'prop-types'

export const GridLayout = ({ slotA, slotB, slotC }) => {
  return (
    <div className='grid col-gap-2 grid-cols-2'>
      <Parcel
        className='col-span-2 p-8 bg-teal-75 rounded-lg'
        config={slotC.config}
        {...slotA.props}
      />
      <Parcel config={slotA.config} {...slotB.props} />
      <Parcel config={slotB.config} {...slotC.props} />
    </div>
  )
}

GridLayout.propTypes = {
  slotA: func,
  slotB: func,
  slotC: func
}
