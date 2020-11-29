import React from 'react'
import { Books } from './Books'
import { MockApolloProvider, mockClient } from '@toasttab/graphql-mocking'
import { gql } from '@apollo/client'

export default {
  title: 'client/components/Books',
  component: Books
}

export function BooksUsage() {
  const typeDefs = ''
  const resolvers = {}
  // mockClient accept an array of schema string - they automatically get merged, so you can mix new with old
  const client = mockClient([typeDefs], resolvers)
  return (
    <MockApolloProvider client={client}>
      <Books />
    </MockApolloProvider>
  )
}
