import React, { Component } from "react";

import PageNotFound from "./PageNotFound";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <Header />
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/about`} component={About} />
            <Route exact path={`/portfolio`} component={Portfolio} />
            <Route exact path={`/contact`} component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
