import React from "react";
import ConnectTo from "../../ConnectTo";
import { Form, Input, Button, message } from "antd";

import "./styles/RemoveUser.css";

class RemoveUser extends React.Component {
  state = {
    data: {}
  };

  onChange = (item, event) => {
    const value = event?.target ? event?.target?.value : event;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [item]: value
      }
    }));
  };

  onSubmit = () => {
    const { email } = this.state.data;
    ConnectTo.delete.user.one(email);
    message.success("Remove successfully.");
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <div className="formRemove">
        <Form {...formItemLayout}>
          <Form.Item label="Email">
            <Input onChange={this.onChange.bind(this, "email")} />
          </Form.Item>
          <Button type="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default RemoveUser;
