import React from "react";
import moment from "moment";
import { Comment } from "antd";
import ReactEmoji from "react-emoji";

const AVATAR_PATH = `https://coubsecure-s.akamaihd.net/get/b189/p/channel/cw_avatar/f2b4362fac7/eff3e186464e2cbaa20dc/profile_pic_new_2x_1521017454_RickAndMorty_RickHappy1500.png`;

/**
 * Single message component
 */
export default class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      avatar: AVATAR_PATH,
      content: "",
      datetime: "",
      current_user: "",
    };
  }

  componentDidMount() {
    this.setState({
      author: this.props.user,
      content: ReactEmoji.emojify(this.props.text),
      datetime: moment(this.props.datetime).calendar(),
      current_user: this.props.currentUser,
    });
  }

  render() {
    return (
      <Comment
        className={`fc-message ${
          this.state.current_user === this.state.author ? "fc-message_user_current" : ""
        }`}
        {...this.state}
      />
    );
  }
}
