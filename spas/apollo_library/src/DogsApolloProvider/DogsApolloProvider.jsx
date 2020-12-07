import React from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4001/',
  cache: new InMemoryCache()
})

export function DogsApolloProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
