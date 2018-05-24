import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "routes/index.jsx";
import { ApolloClient } from 'apollo-client';
import { HttpLink, createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink } from 'apollo-link';
import { getAuthBearer } from './client/utils/cookies';

import "assets/scss/material-kit-react.css";


const httpLink = createHttpLink({ uri: 'https://uwhiskey-server.herokuapp.com/graphql' });
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: getAuthBearer() || null
    }
  });
  return forward(operation)
})

const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

var hist = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          console.log('route', prop);
          if (prop.path === '/')
            return <Route exact path={prop.path} key={key} component={prop.component} />;
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
