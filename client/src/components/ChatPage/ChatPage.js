import React from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./ChatPage.scss";

import InfoBar from "./InfoBar/InfoBar";
import Chat from "./Chat/Chat";
import UsersList from "./UsersList/UsersList";
import { Card, Row, Col } from "antd";

const END_POINT = "localhost:5000";

let socket;

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      room: "",
      message: "",
      messages: "",
      users: "",
      datetime: "",
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
      socket.emit("sendMessage", this.state, () => this.setState({ message: "", datetime: "" }));
    }
  }

  _setMessage(message, datetime) {
    this.setState({ message, datetime });
  }

  render() {
    return (
      <Card className="fc-chat-room" title={`Chatroom «${this.state.room}»`} bordered={false}>
        <InfoBar room={this.state.room} />
        <Row>
          <Col span={18}>
            <Chat
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
