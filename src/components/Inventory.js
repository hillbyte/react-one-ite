import React, { Component } from "react";
import AddFish from "./AddFish";
class Inventory extends Component {
  render() {
    return (
      <div>
        Inventory
        <AddFish addFish={this.props.addFish} />
      </div>
    );
  }
}
export default Inventory;
