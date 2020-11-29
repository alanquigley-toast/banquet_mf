import React from 'react'
import { MyApolloProvider } from './MyApolloProvider'

export default {
  title: 'client/components/MyApollo',
  component: MyApolloProvider
}

export function MyApolloUsage() {
  return <MyApolloProvider />
}
