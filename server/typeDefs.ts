import {ApolloServer,gql} from "apollo-server"
const typeDefs = gql`
  type Book {
    title: String,
    genre: String,
    author: String
  }

  type Query {
    books: [Book],
    authors: [Author]
  }
  type Author {
    name: String,
  }

  type Mutation{
    addBook(title:String!, author:String!, genre:String!): Book
  }
`
  export default typeDefs