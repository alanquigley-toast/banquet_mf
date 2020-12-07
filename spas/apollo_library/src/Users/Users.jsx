import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS } from './query.gql'

export function Users() {
  const { loading, data } = useQuery(GET_USERS)

  if (loading) {
    return 'loading'
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
