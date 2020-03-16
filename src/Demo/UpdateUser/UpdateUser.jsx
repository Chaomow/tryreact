import React from "react";
import ConnectTo from "../../ConnectTo";
import { Form, Input, InputNumber, Button, message } from "antd";
import { connect } from "react-redux";

import "./styles/UpdateUser.css";

class UpdateUser extends React.Component {
  onChange = (item, event) => {
    const value = event?.target ? event?.target?.value : event;
    const data = {
      login: this.props.login,
      email: this.props.email,
      first: this.props.first,
      last: this.props.last,
      age: this.props.age
    };
    this.props.changeUserdata({
      ...data,
      [item]: value
    });
  };

  onSubmit = () => {
    const { email, first, last, age } = this.props;
    ConnectTo.update.user(email, {
      name: { first: first, last: last },
      age: age
    });
    message.success("User data changed successfully.");
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
          <Form.Item label="First Name">
            <Input
              value={this.props.first}
              onChange={this.onChange.bind(this, "first")}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              value={this.props.last}
              onChange={this.onChange.bind(this, "last")}
            />
          </Form.Item>
          <Form.Item label="Age">
            <InputNumber
              value={this.props.age}
              onChange={this.onChange.bind(this, "age")}
            />
          </Form.Item>
          <Button type="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const changeUserdata = userData => {
  return {
    type: "CHANGE_USERDATA",
    payload: {
      login: true,
      email: userData.email,
      first: userData.first,
      last: userData.last,
      age: userData.age
    }
  };
};

function mapStateToProps(state) {
  return {
    login: state.login,
    email: state.email,
    first: state.first,
    last: state.last,
    age: state.age
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserdata: userData => dispatch(changeUserdata(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
