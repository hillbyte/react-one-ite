import React, { Component } from "react";
import PropTypes from "prop-types";
import AddFish from "./AddFish";
import EditFish from "./EditFish";
class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    addToOrder: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
        <AddFish addFish={this.props.addFish} />
        {Object.keys(this.props.fishes).map((key) => (
          <EditFish
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
      </div>
    );
  }
}
export default Inventory;
