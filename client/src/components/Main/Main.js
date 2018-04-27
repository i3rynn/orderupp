import React, { Component } from "react";
import API from "../../utils/API";

import order from "./order";
import Foodcontainer from "./foodcontainer";
import Chooser from "./chooser";

class Main extends Component {
  state = {
    menuoptions: {},
    orderitems: []
  };

  componentDidMount() {
    // get all menu items
    API.getMenu()
    .then(menuoptions => {
    	this.setState({menuoptions});
    });
  }

  render() {
    return (
      <div>
      <Chooser menuoptions={this.state.menuoptions} />
      <div>
      <Foodcontainer />
      </div>
      <Order orderitems={this.state.orderitems} />
      <div>
      Total: {this.state.orderitems.reduce((a, t) => a + t, 0)}
      </div>
      </div>
      );
  }
}

export default Main;
