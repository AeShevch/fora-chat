import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { List } from "antd";
import Message from "../Message/Message";

export default class MessagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: "",
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser,
      messages: this.props.messages,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.messages !== this.props.messages) {
      this.setState({
        messages: this.props.messages,
      });
    }
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        currentUser: this.props.currentUser,
      });
    }
  }

  render() {
    return (
      <ScrollToBottom>
        <List
          dataSource={this.props.messages}
          header={`${this.props.messages.length} ${
            this.props.messages.length > 1 ? "messages" : "message"
          }`}
          itemLayout="horizontal"
          renderItem={(props) => (
            <List.Item>
              <Message currentUser={this.state.currentUser} {...props} />
            </List.Item>
          )}
        />
      </ScrollToBottom>
    );
  }
}
