import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import { getFunName } from "../helpers";
const StorePicker = () => {
  let history = useHistory();
  const [storeName, setStoreName] = useState(getFunName());
  const handleNameInput = (e) => {
    setStoreName(e.target.value);
  };
  const gotoStore = (e) => {
    e.preventDefault();
    console.log(storeName);
    history.push(`/store/${storeName}`);
  };
  return (
    <form className="store-selector" onSubmit={gotoStore}>
      <h2>Enter A Store</h2>
      <input
        type="text"
        required
        value={storeName}
        placeholder="Store Name"
        onChange={handleNameInput}
      />
      <button type="submit">Visit Store</button>
    </form>
  );
};
export default StorePicker;
