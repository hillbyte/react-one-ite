import React, { Component } from "react";

class AddFish extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    console.log(fish);
    this.props.addFish(fish);
    //reseting the form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Fish Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          placeholder="Fish Desc"
        ></textarea>
        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="Fish Image"
        />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}
export default AddFish;
