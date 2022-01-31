import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
class App extends Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    // taking a copy of the existing state
    const fishes = { ...this.state.fishes };
    // adding our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // updating new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}
export default App;
