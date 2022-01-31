import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import store from "./store"
import "./index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const graphqlClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
        <ApolloProvider  client={graphqlClient} >
          <App />
        </ApolloProvider>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
