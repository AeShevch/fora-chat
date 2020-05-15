import React from "react";

import { PageHeader } from "antd";

const InfoBar = ({ room }) => (
  <PageHeader
    className="site-page-header"
    onBack={() => (window.location.href = "/")}
    title={room}
    subTitle="This is a subtitle"
  />
);

export default InfoBar;
