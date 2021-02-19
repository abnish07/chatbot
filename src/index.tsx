import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { apiBaseEndpoint } from "./config";
import { checkEnvVariablesExits } from "./utils/checkEnv";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

// check env variables are provided or not.
checkEnvVariablesExits();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: apiBaseEndpoint
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

