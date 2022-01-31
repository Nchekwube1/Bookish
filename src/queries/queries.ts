import { gql } from "@apollo/client";

export const getBooks = gql`
    query Books {
      books {
        title
        genre
        author
      }
    }
    `

export const addBook = gql`
    mutation AddBook($title: String!, $author: String!, $genre: String!) {
      addBook(title: $title, author: $author, genre: $genre) {
        title
        genre
        author
    }
  }
`