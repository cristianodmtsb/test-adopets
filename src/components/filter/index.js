import React, { Component } from "react";

import { Select } from "antd";

class Filter extends Component {
  render() {
    const { Option } = Select;
    return (
      <div className="filter">
        {/* SEX KEY */}
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={e => this.props.handleChange("sex_key", e)}
        >
          <Option value="all">All Sexs</Option>
          <Option value="MALE">Male</Option>
          <Option value="FEMALE">Female</Option>
        </Select>
        {/* AGE KEY */}
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={e => this.props.handleChange("age_key", e)}
        >
          <Option value="all">All Ages</Option>
          <Option value="BABY">Baby</Option>
          <Option value="YOUNG">Young</Option>
          <Option value="ADULT">Adult</Option>
          <Option value="SENIOR">Senior</Option>
        </Select>
        {/* SIZE KEY */}
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={e => this.props.handleChange("size_key", e)}
        >
          <Option value="all">All Sizes</Option>
          <Option value="S">Small</Option>
          <Option value="M">Mediun</Option>
          <Option value="L">Large</Option>
          <Option value="XL">Extra Large</Option>
        </Select>
      </div>
    );
  }
}

export default Filter;
