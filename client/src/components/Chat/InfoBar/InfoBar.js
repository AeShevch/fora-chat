import React from "react";

import { PageHeader } from "antd";

export default class InfoBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PageHeader
        className="site-page-header"
        onBack={() => (window.location.href = "/")}
        title={this.props.room}
        subTitle="This is a subtitle"
      />
    );
  }
}
