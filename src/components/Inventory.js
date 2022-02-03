import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import AddFish from "./AddFish";
import EditFish from "./EditFish";
import Login from "./Login";

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    addToOrder: PropTypes.func,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authenticate = (provider) => {
    // alert(`logged in with ${provider}`);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  authHandler = async (authData) => {
    const store = await base.fetch(this.props.storeId, { context: this });
    // console.log(store);
    if (!store.owner) {
      // save as owner
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });
    console.log(authData);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null, owner: null });
  };

  render() {
    //check if user is logged in
    const logout = <button onClick={this.logout}>Log Out</button>;
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    //check if user is owner
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>you are not the owner of this store</p>
          {logout}
        </div>
      );
    }
    return (
      <div>
        <h2>Inventory</h2>
        {logout}
        <Login />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
        <AddFish addFish={this.props.addFish} />
        <h2>Manage Items</h2>
        {Object.keys(this.props.fishes).map((key) => (
          <EditFish
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
      </div>
    );
  }
}
export default Inventory;
