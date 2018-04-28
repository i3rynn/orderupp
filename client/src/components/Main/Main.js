import React, { Component } from "react";
import API from "../../utils/API";
 
import Foodcontainer from "./foodcontainer";
import Order from "./order";
import Chooser from "./chooser";

class Main extends Component {
  state = {
    menuOptions: {},
    orderItems: [],
    currentSelection: {}
  };

  // ==============================================================
  // Component loads menu and sets a placholder in current items
  componentDidMount() {
    // get all menu items
    API.getMenu()
    .then(menuOptions => {
    	this.setState({menuOptions});
    });

    this.setDefaultCurrent();
  }

  // ==============================================================
  // Handle showing current item showing 
  
  // set currentSelection to placeholder values
  setDefaultCurrent = () => {
    let placeholder = {
      _id: +new Date(),
      category: "",
      name: "Select an item from above...",
      image: "http://via.placeholder.com/285x285",
      price: 0,
      desc: ""
    }
    this.setState({currentSelection: placeholder});
  }

  // set currentSelection to a menu item
  setCurrent = (index) => {
    let currentSelection = this.state.menuOptions[index];
    currentSelection._id = +new Date();
    this.setState({currentSelection});
  }

  // ==============================================================
  // Handle adding and removing an item from the order 

  // add item to order
  addCurrentToOrder = () =>{
    let newOrderItems = [...this.state.orderItems, this.state.currentSelection];
    
    // do we want to remove current selection when added to order?
    // this.setDefaultCurrent();

    this.setState({orderItems: newOrderItems});
  }

  // remove item from order
  removeFromOrder = index =>{
    let newOrderItems = this.state.filter(item => item._id !== index);

    this.setState({orderItems: newOrderItems});
  }

  // ==============================================================
  // Render function 
  render() {
    return (
      <React.Fragment>
      <div className="headerArea">
      <Chooser menuOptions={this.state.menuOptions} />
      </div>
      <div className="orderArea">
      
      {this.state.currentSelection ? 
      <Foodcontainer {...this.state.currentSelection} /> : 
      null }
    
      <Order orderItems={this.state.orderItems} removeOrder={this.removeFromOrder} />
      </div>
      <div className="totalArea">
        Total: {this.state.orderItems.reduce((t, i) => t + i.price, 0)}
      </div>
      </React.Fragment>
      );
  }
}

export default Main;
