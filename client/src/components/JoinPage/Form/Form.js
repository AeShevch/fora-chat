import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

/**
 * Join chatroom form component
 */
export default class JoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ``,
      room: ``,
    };
  }

  // Updates state on form changing
  _onChangeHandler = (evt, fieldName) => {
    this.setState({
      [fieldName]: evt.target.value,
    });
  };

  // Blocks submitting if one of fields is empty
  _onSubmitHandler = (evt) => (!this.state.name || !this.state.room ? evt.preventDefault() : null);

  render() {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="username"
          dataName="name"
          onChange={(evt) => this._onChangeHandler(evt, `name`)}
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="room"
          onChange={(evt) => this._onChangeHandler(evt, `room`)}
          rules={[
            {
              required: true,
              message: "Please input your Room!",
            },
          ]}
        >
          <Input prefix={<MessageOutlined className="site-form-item-icon" />} placeholder="Room" />
        </Form.Item>

        <Form.Item>
          <Link
            onClick={this._onSubmitHandler}
            to={`/chat?name=${this.state.name}&room=${this.state.room}`}
          >
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}
