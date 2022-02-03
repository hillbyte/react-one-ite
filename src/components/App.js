import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import fishes from "../sample-fishes";
import propTypes from "prop-types";
class App extends Component {
  static propTypes = {
    match: propTypes.object,
  };
  state = {
    fishes: {},
    order: {},
  };

  //?====persisting state
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }
  //persisting order state in local storage
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
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
  //update state
  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes }; //copy of existing state
    fishes[key] = updatedFish; //update the copy
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order }; //copy of the state
    //add to order or update the number in our order
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
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
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}
export default App;
