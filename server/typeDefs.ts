import {ApolloServer,gql} from "apollo-server"
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
  type Author {
    name: String
  }

  type Query {
    authors: [Author]
  }
`
  export default typeDefs