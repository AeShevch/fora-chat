import React from "react";
import { List } from "antd";
import Message from "../Message/Message";

export default class MessagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({
      messages: this.props.messages,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.messages !== this.props.messages) {
      this.setState({
        messages: this.props.messages,
      });
    }
  }

  render() {
    return (
      <List
        dataSource={this.props.messages}
        header={`${this.props.messages.length} ${
          this.props.messages.length > 1 ? "messages" : "message"
        }`}
        itemLayout="horizontal"
        renderItem={(props) => (
          <List.Item>
            <Message {...props} />
          </List.Item>
        )}
      />
    );
  }
}
