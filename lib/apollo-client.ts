import { InMemoryCache, ApolloClient } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://3wo8bdy6.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});
