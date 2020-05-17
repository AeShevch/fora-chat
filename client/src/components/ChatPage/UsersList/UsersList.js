import React from "react";
import { List, Avatar } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const AVATAR_PATH = `https://coubsecure-s.akamaihd.net/get/b189/p/channel/cw_avatar/f2b4362fac7/eff3e186464e2cbaa20dc/profile_pic_new_2x_1521017454_RickAndMorty_RickHappy1500.png`;

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.setState({
      users: this.props.users,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.users !== this.props.users) {
      this.setState({
        users: this.props.users,
      });
    }
  }

  render() {
    return this.state.users ? (
      <aside className="fc-chat-room__aside">
        <Title level={4}>Users in the room:</Title>
        <List
          itemLayout="horizontal"
          dataSource={this.state.users}
          renderItem={(user) => (
            <List.Item>
              <List.Item.Meta avatar={<Avatar src={AVATAR_PATH} />} title={user.name} />
            </List.Item>
          )}
        />
      </aside>
    ) : null;
  }
}
