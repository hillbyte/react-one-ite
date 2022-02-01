import React, { Component } from "react";
import AddFish from "./AddFish";
class Inventory extends Component {
  render() {
    return (
      <div>
        Inventory
        <AddFish addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}
export default Inventory;
