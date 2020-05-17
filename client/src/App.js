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
          <span className="fc-logo__name">ForaChat</span>
        </Header>
        <Content className="fc-main__content">
          <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
          </Router>
        </Content>
        <Footer className="fc-main__footer">
          ForaChat ©2020 Developed by A.Shevchenko for the company «Fora Soft»
        </Footer>
      </Layout>
    );
  }
}
