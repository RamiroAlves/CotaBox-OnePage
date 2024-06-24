import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const currentUrl = window.location.href
let url = ''

if (currentUrl.includes('cotabox.com.br')) {
  url = 'https://appjv.javou.com.br/graphql'
} else {
  url = 'http://localhost:3010/graphql'
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: url,
  }),
  cache: new InMemoryCache(),
});

export default client;
