import React, { Component } from "react";
import API from "../../utils/API";
 
import AddItem from "./AddItem";
import MenuItem from "./MenuItem";

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

    this.setDefaultCurrent();
  }

  // ==============================================================
  // Handle adding and deleting items 
  
  handleAdd = newMenuItem => {
    API.getMenu(newMenuItem)
    .then(data => {
      const totalMenu = [...this.state.menuOptions, newMenuItem];
      this.setState({menuOptions = totalMenu});
    });
  }  

  handleDelete = index => {
    API.deleteMenu(index)
    .then(data => {
      const restOfMenu = this.state.menuOptions.filter(item => item._id !== index);
      this.setState({menuOptions = restOfMenu});
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

          )) :
          null}
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      </div>
      </div>
      </React.Fragment>
      );
  }
}

export default Main;
