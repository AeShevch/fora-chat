import React from "react";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      submitting: false,
    };
  }

  componentDidMount() {
    this.setState({
      value: this.props.value,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  render() {
    return (
      <div>
        <Form.Item>
          <TextArea rows={4} onChange={this.props.onChange} value={this.state.value} />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={this.state.submitting}
            onClick={this.props.onSubmit}
            type="primary"
          >
            Send Message
          </Button>
        </Form.Item>
      </div>
    );
  }
}
