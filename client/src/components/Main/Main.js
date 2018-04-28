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
    const specials = this.state.menuoptions.filter(item => item.category !== category);
    this.setState({ menuoptions });
  }
  // ==============================================================
  // Component loads menu and sets a placholder in current items
  componentDidMount() {
    // get all menu items
    API.getMenu()
    .then(menuoptions => {
    	this.setState({menuoptions});
    });

    // set currentSelection to placeholder values
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

  // ==============================================================
  // Handle showing current item showing 

  // if item is in order, increment qty
  // if item is not in order, add it 
  handleAddOrder = () =>{

    let newOrderItems = this.state.orderItems
      .map(orderItem =>{
        if(orderItem.name === currentSelection.name){

        }
        return orderItem;
      });
  }

  // ==============================================================
  // Handle adding and removing an item from the order 


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
