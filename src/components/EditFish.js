import React, { useState } from "react";
import propTypes from "prop-types";
const EditFish = (props) => {
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    const updatedFish = {
      ...props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    props.updateFish(props.index, updatedFish);
  };

  return (
    <form action="" className="fish-edit">
      <input
        name="name"
        value={props.fish.name}
        onChange={handleChange}
        type="text"
      />
      <input
        type="text"
        name="price"
        value={props.fish.price}
        onChange={handleChange}
      />
      <select name="status" value={props.fish.status} onChange={handleChange}>
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea
        name="desc"
        value={props.fish.desc}
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="image"
        value={props.fish.image}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          props.deleteFish(props.index);
        }}
      >
        Remove
      </button>
    </form>
  );
};

EditFish.propTypes = {
  fish: propTypes.shape({
    name: propTypes.string,
    price: propTypes.number,
    status: propTypes.string,
    desc: propTypes.string,
    image: propTypes.string,
  }),
  index: propTypes.string,
  updateFish: propTypes.func,
  deleteFish: propTypes.func,
};

export default EditFish;
