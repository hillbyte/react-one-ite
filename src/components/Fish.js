import React, { Component } from "react";
import propTypes from "prop-types";
import { formatPrice } from "../helpers";
class Fish extends Component {
  static propTypes = {
    details: propTypes.shape({
      image: propTypes.string,
      name: propTypes.string,
      desc: propTypes.string,
      status: propTypes.string,
      price: propTypes.number,
    }),
    addToOrder: propTypes.func,
  };
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold"}
        </button>
      </li>
    );
  }
}
export default Fish;
