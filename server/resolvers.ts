import { getRepository } from "typeorm";
import { Book } from "./entity/Book";
import { Author } from "./entity/Author";
import {bookType} from './constants/types'
const resolvers = {
  Query: {
    books: async () => {
      const books = await getRepository(Book).find()
      return books
    },
    authors: async () => {
      const authors = getRepository(Author).find()
    },

  },
  Mutation: {
    addBook: async(_:any, {title, author, genre}: bookType) => {
      console.log(title, author, genre)
      const book = new Book();
      book.author = author;
      book.genre = genre;
      book.title = title;
      
      const insetedData = await getRepository(Book).save(book)

      return insetedData
    }
  },
};

export default resolvers