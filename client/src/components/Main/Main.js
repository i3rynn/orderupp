import React, { Component } from "react";
import API from "../../utils/API";

import order from "./order";
import Foodcontainer from "./foodcontainer";
import Chooser from "./chooser";

class Main extends Component {
  state = {
    menuoptions: {},
    orderitems: [],
    currentView: {}
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
      <React.Fragment>
      <Chooser menuoptions={this.state.menuoptions} />
      {this.state.currentView ? 
        <Foodcontainer {...this.state.currentView} /> :
        null
      }
      <div>
      <Foodcontainer />
      </div>
      <Order orderitems={this.state.orderitems} />
      <div>
      Total: {this.state.orderitems.reduce((a, t) => a + t, 0)}
      </div>

      </React.Fragment>
      );
  }
}

export default Main;
