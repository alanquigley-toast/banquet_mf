const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    id: '001',
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    id: '002',
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
