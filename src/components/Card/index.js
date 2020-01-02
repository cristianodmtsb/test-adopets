import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";

class CardPet extends Component {
  render() {
    const { Meta } = Card;
    const { PetName, PetSex, PetAge, PetSize, PetStatus } = this.props;
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" src="https://source.unsplash.com/250x250/?pet" />
        }
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={PetName}
          href="link"
        />
        <p>
          This pet is:{" "}
          {PetStatus === "AVAILABLE" ? (
            <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
          ) : (
            <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />
          )}
        </p>
        <strong>
          {PetSex === "MALE" ? <Icon type="man" /> : <Icon type="woman" />}{" "}
        </strong>
        <strong>
          <Icon type="heart" /> {PetAge}{" "}
        </strong>
        <strong>
          <Icon type="setting" key="setting" /> {PetSize}{" "}
        </strong>
      </Card>
    );
  }
}

export default CardPet;
