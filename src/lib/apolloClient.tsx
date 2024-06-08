// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { nhost } from "./nhost";

const httpLink = createHttpLink({
  uri: `https://jvkuyhesklqvyxxrmbvx.hasura.ap-south-1.nhost.run/v1/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await nhost.auth.getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
