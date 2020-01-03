import React, { Component } from "react";
import { Form, Icon, Input, Button, message, Card, Row, Col } from "antd";

import apiKey from "../../services/apiKey";
import { login } from "../../services/auth";
import { veryfyAccessToken } from "../../services/accessToken";

import history from "../../services/history";
import "./style.css";

import Logo from "../../assets/images/adopets-logo.svg";

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
    this.openMessage();

    this.props.form.validateFields(async err => {
      if (!err) {
        await apiKey
          .post("/auth/session-register", {
            organization_user: { email, password }
          })
          .then(response => {
            login(response.data.data.access_key);
            return history.push("/home");
          })
          .catch(error => {
            console.log("Error Login: ", error);
          });
      }
    });
  };

  openMessage = () => {
    const key = "updatable";
    message.loading({ content: "Sing in...", key });
    setTimeout(() => {
      message.success({ content: "OK!", key, duration: 2 });
    }, 1000);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{
            height: "100%"
          }}
        >
          <Col
            xs={16}
            sm={14}
            md={10}
            lg={8}
            xl={6}
            style={{
              textAlign: "center"
            }}
          >
            <div className="logo-login">
              <img src={Logo} alt="Adopets" />
            </div>

            <Card>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator("email", {
                    rules: [
                      { required: true, message: "Please input your email!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Email"
                      type="email"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <Input.Password
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
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
                  <br />
                  Or <a href="/">register now!</a>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  LoginClass
);

export default WrappedNormalLoginForm;
