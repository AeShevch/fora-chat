import React from "react";
import { Button, Form, Input } from "antd";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { SendOutlined } from "@ant-design/icons";
const { TextArea } = Input;

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      submitting: false,
      showEmojis: false,
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

  _addEmoji = (e) => {
    // TODO Now sends only with text
    const emoji = e.native;

    this.setState({
      value: this.state.value + emoji,
    });

    // const event = new Event("input", { bubbles: true });
    // this.messageField.dispatchEvent(event);
  };

  _showEmojis = () => {
    this.setState(
      {
        showEmojis: true,
      },
      () => document.addEventListener("click", this._closeMenu)
    );
  };

  _closeMenu = (e) => {
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState(
        {
          showEmojis: false,
        },
        () => document.removeEventListener("click", this._closeMenu)
      );
    }
  };

  render() {
    return (
      <div>
        <Form.Item className="fc-message-form">
          <TextArea
            rows={3}
            onChange={this.props.onChange}
            onKeyPress={(evt) =>
              evt.ctrlKey && evt.key === "Enter" ? this.props.onSubmit(evt) : null
            }
            value={this.state.value}
          />
          <div className="fc-message-form__picker">
            {this.state.showEmojis ? (
              <span ref={(el) => (this.emojiPicker = el)}>
                <Picker onSelect={this._addEmoji} emojiTooltip={true} title="weChat" />
              </span>
            ) : (
              <button onClick={this._showEmojis}>{String.fromCodePoint(0x1f60a)}</button>
            )}
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={this.state.submitting}
            onClick={this.props.onSubmit}
            type="primary"
          >
            Send Message
            <SendOutlined />
          </Button>
          <span className="fc-shortcut-tip">Ctrl + Enter</span>
        </Form.Item>
      </div>
    );
  }
}
