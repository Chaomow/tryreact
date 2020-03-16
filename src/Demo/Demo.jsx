import React from "react";
import Login from "./Login";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import UpdatePassword from "./UpdatePassword";
import RemoveUser from "./RemoveUser";
import Logout from "./Logout";
import { Tabs } from "antd";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import "./styles/Demo.css";

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: this.props.login ? "none" : "block" }}>
          <Tabs defaultActiveKey="1" className="tabMain">
            <Tabs.TabPane tab="Log In" key="1">
              <Login />
            </Tabs.TabPane>
            <Tabs.TabPane tab="New User" key="2">
              <AddUser />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Remove User" key="3">
              <RemoveUser />
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div style={{ display: this.props.login ? "block" : "none" }}>
          <Tabs defaultActiveKey="1" className="tabMain">
            <Tabs.TabPane tab="Update User" key="1">
              <UpdateUser />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Change Password" key="2">
              <UpdatePassword />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Log Out" key="3">
              <Logout />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(Demo);
