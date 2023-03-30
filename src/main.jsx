import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

// tells Apollo Client where to find the GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

// creates an Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache() // stores the data obtained from the endpoint in memory
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </BrowserRouter>
)
