import { object, string } from 'prop-types'
import React from 'react'
import { mountRootParcel } from 'single-spa'
import SingleSpaParcel from 'single-spa-react/parcel'

export const Parcel = ({ config, className, ...props }) => {
  return (
    <SingleSpaParcel
      wrapClassName={className}
      mountParcel={mountRootParcel}
      config={config}
      {...props}
    />
  )
}

Parcel.propTypes = {
  config: object,
  className: string
}
