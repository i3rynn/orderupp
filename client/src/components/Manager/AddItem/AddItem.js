import React, { Component } from "react";

class AddItem extends Component {
  state = {
    category: "",
    name: "",
    price: "",
    desc: "",
    image: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    if( this.state.category && this.state.name && this.state.price && this.state.image ){

      this.props.add(this.state);

      this.setState({
        category: "",
        name: "",
        price: "",
        desc: "",
        image: ""
      });

    }
  };

  render() {
    return (
      <div>
      <h1>Add an item to the menu</h1>

      <form className="form">

      <legend>Select a Category</legend>

      <label>Specials
      <input name="category" onChange={this.handleInputChange} type="radio" value="Specials" />
      </label>
      <label>Kids
      <input name="category" onChange={this.handleInputChange} type="radio" value="Kids" />
      </label>
      <label>Entrees
      <input name="category" onChange={this.handleInputChange} type="radio" value="Entrees" />
      </label>
      <label>Desserts
      <input name="category" onChange={this.handleInputChange} type="radio" value="Desserts" />
      </label>
      <label>Drinks
      <input name="category" onChange={this.handleInputChange} type="radio" value="Drinks" />
      </label>
      <input
      value={this.state.name}
      name="name"
      onChange={this.handleInputChange}
      type="text"
      placeholder="Item Name"
      />
      <input
      value={this.state.price}
      name="price"
      onChange={this.handleInputChange}
      type="number"
      step="0.01"
      placeholder="Item Price"
      />
      <input
      value={this.state.desc}
      name="desc"
      onChange={this.handleInputChange}
      type="text"
      placeholder="Description"
      />
      <input
      value={this.state.image}
      name="image"
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

  export default AddItem;
