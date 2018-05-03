import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  state = {
    category: "",
    newItem: "",
    newPrice: "",
    newDesc: "",
    newImage: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.SetState({
      category: "",
      newItem: "",
      newPrice: "",
      newDesc: "",
      newImage: ""
    });
  };

  pushNewItem = () => {

  }

  render() {
    return (
      <div>
        <h1>Add an item to the menu</h1>
        <form className="form">
          <input
            value={this.state.newItem}
            name="newItem"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Item Name"
          />
          <input
            value={this.state.newPrice}
            name="newPrice"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Item Price"
          />
          <input
            value={this.state.newDesc}
            name="newDesc"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Description"
          />
          <input
            value={this.state.newImage}
            name="newImage"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Image"
          />
        <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }




}
