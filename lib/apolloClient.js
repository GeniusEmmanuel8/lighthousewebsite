import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rccgthelighthouse.org/graphql',
  cache: new InMemoryCache(),
});

export default client; 