import React, { Component } from "react";
import API from "../../utils/API";
 
import AddItem from "./AddItem/AddItem";
import MenuItem from "./MenuItem/MenuItem";

class Manager extends Component {
  state = {
    menuOptions: []
  };

  // ==============================================================
  // Component loads menu and sets a placholder in current items
  componentDidMount() {
    // get all menu items
    API.getMenu()
    .then(data => {
    	this.setState({menuOptions: data.data});
    });
  }

  // ==============================================================
  // Handle adding and deleting items 
  
  handleAdd = newMenuItem => {
    API.getMenu(newMenuItem)
    .then(data => {
      const totalMenu = [...this.state.menuOptions, newMenuItem];
      this.setState({menuOptions: totalMenu});
    });
  }  

  handleDelete = index => {
    API.deleteMenu(index)
    .then(data => {
      const restOfMenu = this.state.menuOptions.filter(item => item._id !== index);
      this.setState({menuOptions: restOfMenu});
    });
  }


  // ==============================================================
  // Render function 
  render() {
    return (
      <React.Fragment>
      <h1 className="display-1">Manage</h1>
      <div className="container">
      <div className="card">
      <ul className="list-group list-group-flush">
        {this.state.menuOptions ? 
          this.state.menuOptions.map(item =>(
          <MenuItem {...item} delete={this.handleDelete} />
          )) :
          null}
      </ul>
      </div>
      </div>
      </React.Fragment>
      );
  }
}

export default Manager;
