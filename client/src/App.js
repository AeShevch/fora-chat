import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    );
  }
}
