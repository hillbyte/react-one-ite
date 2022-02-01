import React from "react";
import { formatPrice } from "../helpers";
const Order = (props) => {
  const orderId = Object.keys(props.order);
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
      <h3>Your Orders</h3>
      <p>total amount: {formatPrice(total)}</p>
    </div>
  );
};

export default Order;
