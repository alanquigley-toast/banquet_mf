import React from 'react'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'
import { MerryGoRound } from '@toasttab/buffet-pui-loading-indicators'
import { useQuery } from 'react-query'
export const ParcelLoader = ({ name, children, className, customProps }) => {
  const systemQuery = () => global.System.import(name)

  const { isLoading, data, error } = useQuery(name, systemQuery)

  if (isLoading) {
    return (
      <div className='fixed inset-0'>
        <div className='absolute pin-center'>
          <MerryGoRound />
        </div>
      </div>
    )
  }
  if (error) {
    return <div>Problem loading SPA</div>
  }

  return (
    <Parcel
      {...customProps}
      mountParcel={mountRootParcel}
      wrapClassName={className}
      config={data}
    >
      {children}
    </Parcel>
  )
}
