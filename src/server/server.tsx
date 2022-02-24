import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloServer  = () => {
    return new ApolloClient({
      link: new HttpLink({
        uri: 'https://iteria-customer-list.herokuapp.com/v1/graphql',
      }),
      cache: new InMemoryCache(),
    });
};
const apolloServer = createApolloServer();

export default apolloServer;