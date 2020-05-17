import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import JoinForm from "./Form/Form";
import "./Join.scss";

export default class Join extends React.Component {
  render() {
    return (
      <Card className="fc-join-form" title="Join chat" bordered={false}>
        <JoinForm />
      </Card>
    );
  }
}
