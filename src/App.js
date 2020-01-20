import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Header from './Header'
import LandingPage from './LandingPage'
import Portfolio from './Portfolio'
import Contact from './Contact'

import "./App.css"

const hist = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Header />
      <Router history={hist}>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

