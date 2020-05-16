import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./logo.svg";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

import "./App.scss";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
  render() {
    return (
      <Layout className="fc-main">
        <Header className="fc-main__header">
          <img className="fc-logo" src={logo} alt="Fora chat logo" />
        </Header>
        <Content className="fc-main__content">
          <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
          </Router>
        </Content>
        <Footer className="fc-main__footer">
          Fora Chat ©2020 Created by A.Shevchenko for Fora Soft{" "}
        </Footer>
      </Layout>
    );
  }
}
