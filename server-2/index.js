const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Dog {
    id: ID
    title: String
    author: String
  }

  type Query {
    dogs: [Dog]
  }
`

const dogs = [
  {
    id: '001',
    title: 'The Bark Knight',
    author: 'Bark Rover'
  },
  {
    id: '002',
    title: 'Dog Day Afternoon',
    author: 'Fido Goodboy'
  }
]

const resolvers = {
  Query: {
    dogs: () => dogs
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen({
    port: 4001
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
