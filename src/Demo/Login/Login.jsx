import React from "react";
import ConnectTo from "../../ConnectTo";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";

import "./styles/Login.css";

class Login extends React.Component {
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
    const { email, password } = this.state.data;
    ConnectTo.login({ email, password }).then(res => {
      if (res.data) {
        const userData = {
          email: res.data.email,
          first: res.data.name.first,
          last: res.data.name.last,
          age: res.data.age
        };
        message.success(`Welcome Back, ${res.data.name.first}`);
        this.props.changeUserdata(userData);
      } else {
        message.warning(`Email or password is incorrect.`);
      }
    });
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
      <div className="formAdd">
        <Form {...formItemLayout}>
          <Form.Item label="Email">
            <Input onChange={this.onChange.bind(this, "email")} />
          </Form.Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
