import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
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
  loadSampleFishes = () => {
    console.log("loading sample fishes");
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order }; //copy of the state
    //add to order or update the number in our order
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
export default App;
