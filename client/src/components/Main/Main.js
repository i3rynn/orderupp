import React, { Component } from "react";
import API from "../../utils/API";

import * as Order from "./order";
import Foodcontainer from "./foodcontainer";
import * as Chooser from "./chooser";

class Main extends Component {
  state = {
    menuoptions: {},
    orderitems: []
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
  }

  render() {
    return (
      <div>
        {this.state.menuoptions.map(item => (
          <foodcontainer
            ingredientTitle ={item.name}
            ingredientText = {item.description}
          />
        ))}
      {/*
      	<Order />
      	<Chooser />
      */}
      <div>Fill in with footer info (total calulation)</div>
      </div>
      );
  }
}

export default Main;
