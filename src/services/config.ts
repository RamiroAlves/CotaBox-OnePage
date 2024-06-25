import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const currentUrl = window.location.href
let url = ''

if (currentUrl.includes('vercel.app')) {
  url = 'https://cotabox-api-nx1r.onrender.com/graphql'
} else {
  url = 'https://cotabox-api-nx1r.onrender.com/graphql'
  // url = 'http://localhost:3010/graphql'
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: url,
  }),
  cache: new InMemoryCache(),
});

export default client;
