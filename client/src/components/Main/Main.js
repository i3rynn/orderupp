import React, { Component } from "react";
import API from "../../utils/API";

import order from "./order";
import Foodcontainer from "./foodcontainer";
import Chooser from "./chooser";

class Main extends Component {
  state = {
    menuOptions: {},
    orderItems: [],
    currentSelection: {}
  };

  displaySpecial = category => {
    const specials = this.state.menuOptions.filter(item => item.category !== category);
    this.setState({ menuOptions });
  }
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
    
      <Order orderItems={this.state.orderItems} />
      </div>
      <div className="totalArea">
        Total: {this.state.orderItems.reduce((a, t) => a + t, 0)}
      </div>
      </React.Fragment>
      );
  }
}

export default Main;
