import React from 'react'
import { gql, useQuery } from '@apollo/client'

export function Books() {
  const GET_BOOKS = gql`
    query getBooks {
      books {
        id
        title
        author
      }
    }
  `
  const { loading, data } = useQuery(GET_BOOKS)

  if (loading) {
    return 'loading'
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
