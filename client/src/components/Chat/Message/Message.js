import React from "react";
import moment from "moment";
import { Comment } from "antd";

const AVATAR_PATH = `https://coubsecure-s.akamaihd.net/get/b189/p/channel/cw_avatar/f2b4362fac7/eff3e186464e2cbaa20dc/profile_pic_new_2x_1521017454_RickAndMorty_RickHappy1500.png`;

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      avatar: AVATAR_PATH,
      content: "",
      datetime: "",
    };
  }

  componentDidMount() {
    this.setState({
      author: this.props.user,
      content: this.props.text,
      datetime: moment().fromNow(), // TODO
    });
  }

  render() {
    return <Comment {...this.state} />;
  }
}
