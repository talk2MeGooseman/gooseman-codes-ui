import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import graphqlClient from './services/graphqlClient';

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
// registerServiceWorker();
