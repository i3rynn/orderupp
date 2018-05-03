import React, { Component } from "react";
import API from "../../utils/API";
 
import AddItem from "./AddItem";

class Manager extends Component {
  state = {
    menuOptions: {}
  };

  // ==============================================================
  // Component loads menu and sets a placholder in current items
  componentDidMount() {
    // get all menu items
    API.getMenu()
    .then(data => {
    	this.setState({menuOptions: data.data});
    });

    this.setDefaultCurrent();
  }

  // ==============================================================
  // Handle adding and deleting items 
  
  setDefaultCurrent = () => {
  }


  // ==============================================================
  // Render function 
  render() {
    return (
      <React.Fragment>
      <div className="menuSelection mb-4">
      <Chooser menuOptions={this.state.menuOptions} setCurrent={this.setCurrent} />
      </div>
      <div className="orderArea w-100 d-flex justify-content-between">
      
      {this.state.currentSelection ? 
      <Foodcontainer {...this.state.currentSelection} addToOrder={this.addCurrentToOrder} /> : 
      null }
    
      <Order orderItems={this.state.orderItems} removeOrder={this.removeFromOrder} />
      </div>
      <div className="totalArea mt-4 display-4">
        Total: {total}
      </div>
      </React.Fragment>
      );
  }
}

export default Main;
