import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: '/graphql/twitch',
  cache: new InMemoryCache(),
});
