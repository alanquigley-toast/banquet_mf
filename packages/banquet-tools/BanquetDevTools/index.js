import React from 'react'
import { BanquetDevTools as DevBanquetDevTools } from './BanquetDevTools'

export function BanquetDevTools() {
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return <DevBanquetDevTools />
}
