import React from "react";
import ConnectTo from "../../ConnectTo";
import { Form, Input, InputNumber, Button, message } from "antd";
import { connect } from "react-redux";

import "./styles/AddUser.css";

class AddUser extends React.Component {
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
    const { email, password, first, last, age } = this.state.data;
    if (email && password && first && last && age) {
      ConnectTo.find.user.byEmail(email).then(res => {
        if (!!res.data) {
          message.warning("Please use another email!");
        } else {
          ConnectTo.add.user({
            email,
            password,
            name: { first, last },
            age: age
          });
          message.success("Welcome!");
          this.props.changeUserdata({ email, first, last, age });
        }
      });
    } else {
      message.error("Something missing");
    }
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
          <Form.Item label="First Name">
            <Input onChange={this.onChange.bind(this, "first")} />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input onChange={this.onChange.bind(this, "last")} />
          </Form.Item>
          <Form.Item label="Age">
            <InputNumber onChange={this.onChange.bind(this, "age")} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
