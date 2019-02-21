import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    // if (true) {
    //   throw new Error("Nooooo!");
    // }
    const { robots } = this.props;
    const cardComponent = robots.map((robot, i) => {
      return (
        <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
      );
    });
    return <div>{cardComponent}</div>;
  }
}
