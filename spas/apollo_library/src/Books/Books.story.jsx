import React from 'react'
import { Books } from './Books'
import { MockApolloProvider, mockClient } from '@toasttab/graphql-mocking'
import schema from '../../schema.gql'

export default {
  title: 'client/components/Books',
  component: Books
}

export function BooksUsage() {
  const resolvers = {}
  // mockClient accept an array of schema string - they automatically get merged, so you can mix new with old
  const client = mockClient([schema], resolvers)
  return (
    <MockApolloProvider client={client}>
      <Books />
    </MockApolloProvider>
  )
}
