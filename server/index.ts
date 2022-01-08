import "reflect-metadata";
import { createConnection } from "typeorm";
import typeDefs from "./typeDefs"
import resolvers from "./resolvers" 
 import {ApolloServer,gql} from "apollo-server"
createConnection().then(async connection=>{
  console.log("connection success")
})
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});