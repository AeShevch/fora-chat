import React from "react";
import { Comment, Avatar } from "antd";
import MessagesList from "../MessagesList/MessagesList";
import MessageForm from "../MessageForm/MessageForm";

const AVATAR_PATH = `https://coubsecure-s.akamaihd.net/get/b189/p/channel/cw_avatar/f2b4362fac7/eff3e186464e2cbaa20dc/profile_pic_new_2x_1521017454_RickAndMorty_RickHappy1500.png`;

export default class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: "",
      submitting: false,
      value: "",
    };
  }

  handleSubmit = (evt) => {
    if (!this.state.value) {
      return;
    }
    this.setState({
      value: "",
      messages: [
        ...this.state.messages,
        {
          user: this.props.name,
          text: this.state.value,
        },
      ],
    });

    this.props.sendMessage(evt);
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
    });

    this.props.setMessage(this.state.value);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.messages !== this.props.messages) {
      this.setState({
        messages: this.props.messages,
      });
    }
  }

  render() {
    const { messages, submitting, value } = this.state;

    return (
      <div>
        <MessagesList messages={messages} />
        <Comment
          avatar={<Avatar src={AVATAR_PATH} alt={this.props.name} />}
          content={
            <MessageForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}
