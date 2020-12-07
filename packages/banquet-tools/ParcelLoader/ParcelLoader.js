import React, { useEffect, useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { mountRootParcel } from 'single-spa'
import { MerryGoRound } from '@toasttab/buffet-pui-loading-indicators'

export const ParcelLoader = ({ name, children, className, customProps }) => {
  const [bundle, setBundle] = useState(null)

  useEffect(() => {
    global.System.import(name).then(remoteEntry =>
      remoteEntry.get('./Banquet').then(value => setBundle(value))
    )
  }, [name])

  if (!bundle) {
    return <MerryGoRound />
  }
  return (
    <Parcel
      {...customProps}
      mountParcel={mountRootParcel}
      wrapClassName={className}
      config={bundle}
    >
      {children}
    </Parcel>
  )
}
