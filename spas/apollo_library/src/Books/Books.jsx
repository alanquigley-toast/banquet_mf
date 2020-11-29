import React from 'react'
import { useQuery } from '@apollo/client'
import { getBooks } from './query.gql'

export function Books() {
  const { loading, data } = useQuery(getBooks)

  if (loading) {
    return 'loading'
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
