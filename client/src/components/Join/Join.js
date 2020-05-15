import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import JoinForm from "./Form/Form";

const Join = () => {
  return (
    <Card title="Join chat" bordered={false} style={{ width: 300 }}>
      <JoinForm />
    </Card>
  );
};

export default Join;
