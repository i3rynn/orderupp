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

  render() {
    return (
      <React.Fragment>
      <div className="headerArea">
      <Chooser menuOptions={this.state.menuOptions} />
      </div>
      <div className="orderArea">
      <Foodcontainer {...this.state.currentSelection} />
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
