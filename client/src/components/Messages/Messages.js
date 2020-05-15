import React from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

const { TextArea } = Input;

const AVATAR_PATH = `https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`;

const CommentList = ({ comments }) => {
  const adapter = (props) => ({
    author: props.user,
    avatar: AVATAR_PATH,
    content: props.text,
    datetime: moment().fromNow(),
  });
  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => (
        <List.Item>
          {console.log({ ...props })}
          <Comment {...adapter(props)} />
        </List.Item>
      )}
    />
  );
};

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Send Message
      </Button>
    </Form.Item>
  </div>
);

export default class ChatForm extends React.Component {
  constructor(props) {
    console.log("click");
    super(props);
    // console.log(props);
    this.state = {
      comments: "",
      submitting: false,
      value: "",
    };
  }
  // this.state.comments = this.props.messages;

  handleSubmit = (evt) => {
    // console.log(this.props.messages);
    if (!this.state.value) {
      return;
    }
    this.setState({
      value: "",
      comments: [
        {
          author: this.props.name,
          avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{this.state.value}</p>,
          datetime: moment().fromNow(),
        },
        ...this.state.comments,
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.messages,
    });
  }

  render() {
    const { comments, submitting, value } = this.state;

    console.log(this.props.messages);

    return (
      <div>
        <CommentList comments={comments} />
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={this.props.name}
            />
          }
          content={
            <Editor
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
