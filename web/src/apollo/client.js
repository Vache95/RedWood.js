import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  url: 'https://jsonplaceholder.typicode.com',
  cache: new InMemoryCache(),
})

export default client
