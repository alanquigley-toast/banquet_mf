import React from 'react'
import { useQuery } from '@apollo/client'
import { getDogs } from './query.gql'

export function Dogs() {
  const { loading, data } = useQuery(getDogs)

  if (loading) {
    return 'loading'
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
