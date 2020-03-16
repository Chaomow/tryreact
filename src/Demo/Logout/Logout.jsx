import React from "react";
import { Form, Button, message } from "antd";
import { connect } from "react-redux";

import "./styles/Logout.css";

class Logout extends React.Component {
  onSubmit = () => {
    message.success("Bye!");
    this.props.changeUserdata(null);
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
          <Button type="primary" onClick={this.onSubmit}>
            Logout
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
      login: false,
      email: "",
      first: "",
      last: "",
      age: 18
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

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
