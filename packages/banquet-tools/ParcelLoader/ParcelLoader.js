import React, { useEffect, useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { MerryGoRound } from '@toasttab/buffet-pui-loading-indicators'
import { mountRootParcel } from 'single-spa'
import { string } from 'prop-types'

export const ParcelLoader = ({ name, className, ...props }) => {
  const [config, configSet] = useState(null)

  useEffect(() => {
    global.System.import(name).then(config => configSet(config))
  }, [name])

  if (!config) {
    return <MerryGoRound />
  }

  return (
    <Parcel
      wrapClassName={className}
      mountParcel={mountRootParcel}
      config={config}
      {...props}
    />
  )
}

ParcelLoader.propTypes = {
  name: string,
  className: string
}
