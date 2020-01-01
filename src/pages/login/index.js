import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

import api from "../../services/api";
import { veryfyAccessToken } from "../../services/accessToken";
import history from "../../services/history";

class LoginClass extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    /**
     * For create new Access token key i call this function
     * But it's not correct i now this
     * But this is just for test :)
     */
    veryfyAccessToken();
  }

  handleSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;

    this.props.form.validateFields(async err => {
      if (!err) {
        const response = await api
          .post("/auth/session-register", {
            organization_user: { email, password }
          })
          .then(response => {
            /**
             * Here we need setup the TOKEN from api
             * But because the access token key i just show de response data
             */
            console.log("Data access_key", response.data);
            return history.push("/home");
          })
          .catch(error => {
            console.log("Error Login: ", error);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              type="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  LoginClass
);

export default WrappedNormalLoginForm;
