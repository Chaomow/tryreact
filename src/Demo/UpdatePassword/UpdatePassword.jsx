import React from "react";
import ConnectTo from "../../ConnectTo";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";

import "./styles/UpdatePassword.css";

class UpdatePassword extends React.Component {
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
    const { email } = this.props;
    ConnectTo.update.password(email, this.state.data);
    message.success("Password changed successfully.");
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
      <div className="formUpdate">
        <Form {...formItemLayout}>
          <Form.Item label="Password">
            <Input.Password onChange={this.onChange.bind(this, "password")} />
          </Form.Item>
          <Button type="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.email
  };
}

export default connect(mapStateToProps)(UpdatePassword);
