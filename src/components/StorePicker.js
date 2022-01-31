import React, { Component } from "react";
import { getFunName } from "../helpers";
class StorePicker extends Component {
  //   //run before the component is rendered
  //   constructor() {
  //     super();
  //     //bind with component
  //     this.goToStore = this.goToStore.bind(this);
  //   }
  storeInput = React.createRef();
  goToStore = (event) => {
    //stop the form from submitting
    event.preventDefault();
    console.log(this.storeInput.current.value);
    // get the text from the input
    const storeName = this.storeInput.current.value;
    //redirect to /store/:storeId
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Enter A Store</h2>
        <input
          type="text"
          required
          ref={this.storeInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
export default StorePicker;
