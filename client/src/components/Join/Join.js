import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        onChange={(evt) => setName(evt.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="room"
        onChange={(evt) => setRoom(evt.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your Room!',
          },
        ]}
      >
        <Input prefix={<MessageOutlined className="site-form-item-icon" />} placeholder="Room" />
      </Form.Item>

      <Form.Item>
        <Link
          onClick={(evt) => (!name || !room ? evt.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default Join;
