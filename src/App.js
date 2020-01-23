import React from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/details/:movieId" exact component={Detail} />
      </Router>
      <div className="App" />
    </ApolloProvider>
  );
}

export default App;
