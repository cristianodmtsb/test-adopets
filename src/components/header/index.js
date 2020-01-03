import React, { Component } from "react";
import { Row, Col, Layout, Input, Icon, Avatar, Badge } from "antd";

import Logo from "../../assets/images/adopets-logo.svg";
const { Header, Content } = Layout;

class HeaderHome extends Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Content
          style={{
            margin: "0 auto",
            padding: "0 24px",
            width: "100%",
            maxWidth: 980
          }}
        >
          <Row type="flex" justify="space-between" align="middle">
            <Col className="logo-login">
              <img src={Logo} alt="Adopets" />
            </Col>

            <Col className="logo-login">
              <Input
                prefix={
                  <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Search your pet"
                type="email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Col>
            <Col
              className="logo-login"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <strong>Julia </strong>{" "}
              <Badge count={6}>
                <Avatar src="https://source.unsplash.com/250x250/?person" />
              </Badge>
            </Col>
          </Row>
        </Content>
      </Header>
    );
  }
}

export default HeaderHome;
