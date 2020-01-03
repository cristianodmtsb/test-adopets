import React, { Component } from "react";

import { Select, Col } from "antd";

class Filter extends Component {
  render() {
    const { Option } = Select;
    return (
      <>
        <Col span={24} style={{ marginBottom: 0, paddingBottom: 0 }}>
          {this.props.countPets ? (
            <strong>Filter between {this.props.countPets} pets: </strong>
          ) : (
            <strong>
              Filter between {this.props.countPets} pets: Sorry, we're working
              hard to find your pet!{" "}
            </strong>
          )}
        </Col>
        <Col span={8}>
          {/* SEX KEY */}
          <Select
            defaultValue="all"
            style={{ width: "100%" }}
            onChange={e => this.props.handleChange("sex_key", e)}
          >
            <Option value="all">All Sexs</Option>
            <Option value="MALE">Male</Option>
            <Option value="FEMALE">Female</Option>
          </Select>
        </Col>
        <Col span={8}>
          {/* AGE KEY */}
          <Select
            defaultValue="all"
            style={{ width: "100%" }}
            onChange={e => this.props.handleChange("age_key", e)}
          >
            <Option value="all">All Ages</Option>
            <Option value="BABY">Baby</Option>
            <Option value="YOUNG">Young</Option>
            <Option value="ADULT">Adult</Option>
            <Option value="SENIOR">Senior</Option>
          </Select>
        </Col>
        <Col span={8}>
          {/* SIZE KEY */}
          <Select
            defaultValue="all"
            style={{ width: "100%" }}
            onChange={e => this.props.handleChange("size_key", e)}
          >
            <Option value="all">All Sizes</Option>
            <Option value="S">Small</Option>
            <Option value="M">Mediun</Option>
            <Option value="L">Large</Option>
            <Option value="XL">Extra Large</Option>
          </Select>
        </Col>
      </>
    );
  }
}

export default Filter;
