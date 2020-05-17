import React from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.scss";

import InfoBar from "./InfoBar/InfoBar";
import Messages from "./Messages/Messages";
import UsersList from "./UsersList/UsersList";
import { Card, Row, Col } from "antd";

const END_POINT = "localhost:5000";

let socket;

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      room: "",
      message: "",
      messages: "",
      users: "",
    };
  }

  componentDidMount() {
    const { name, room } = queryString.parse(this.props.location.search);

    socket = io(END_POINT);

    this.setState({ name, room });

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("message", (message) => {
      this.setState({
        messages: [...this.state.messages, message],
      });
    });

    socket.on("roomData", ({ users }) => {
      this.setState({
        users: users,
      });
    });
  }

  _sendMessage(evt) {
    evt.preventDefault();

    if (this.state.message) {
      socket.emit("sendMessage", this.state.message, () => this.setState({ message: "" }));
    }
  }

  _setMessage(message) {
    this.setState({ message });
  }

  render() {
    return (
      <Card className="fc-chat-room" title={`Chatroom «${this.state.room}»`} bordered={false}>
        <InfoBar room={this.state.room} />
        <Row>
          <Col span={18}>
            <Messages
              name={this.state.name}
              messages={this.state.messages}
              message={this.state.message}
              setMessage={this._setMessage.bind(this)}
              sendMessage={this._sendMessage.bind(this)}
            />
          </Col>
          <Col span={5} offset={1}>
            <UsersList users={this.state.users} />
          </Col>
        </Row>
      </Card>
    );
  }
}
