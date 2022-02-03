import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
const Order = (props) => {
  const orderId = Object.keys(props.order);

  const renderOrder = (key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish && fish.status === "available";
    //? if fish is available, then show the order
    if (!fish) return null;
    if (!isAvailable) {
      return <li key={key}>{fish ? fish.name : "fish"} is out of stock</li>;
    }
    return (
      <li key={key}>
        {count}- {fish.name} ({formatPrice(count * fish.price)})
        <button onClick={() => props.removeFromOrder(key)}>remove</button>
      </li>
    );
  };

  // console.log(orderId);
  //?returning sum of orders
  const total = orderId.reduce((total, key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (isAvailable) {
      return total + count * fish.price;
    }
    return total;
  }, 0);

  return (
    <div className="order-wrap">
      <h3>Your Cart</h3>
      <ul className="order">{orderId.map(renderOrder)}</ul>
      <p>total amount: {formatPrice(total)}</p>
    </div>
  );
};

Order.propTypes = {
  fishes: PropTypes.object,
  order: PropTypes.object,
  removeFromOrder: PropTypes.func,
};

export default Order;
