const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const authors = [
    {
        name:"chimamanda adichie"
    },
    {
        name:"dan brown"
    },
    {
        name:"ola rotimi"
    },
]

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,

  }
};

export default resolvers