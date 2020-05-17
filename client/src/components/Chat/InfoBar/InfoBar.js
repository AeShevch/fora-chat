import React from "react";

import { PageHeader } from "antd";

export default class InfoBar extends React.Component {
  render() {
    return (
      <PageHeader
        className="site-page-header"
        onBack={() => (window.location.href = "/")}
        title="Choose another chat"
      />
    );
  }
}
