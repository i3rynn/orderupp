import React, { Component } from "react";
import API from "../../utils/API";
import AddItem from "./AddItem/AddItem";
import MenuItem from "./menuitem/menuitem";

class Manager extends Component {
    login() {
        this.props.auth.login();
    }
    state = {
        menuOptions: []
    };

    // ==============================================================
    // Component loads menu and sets a placholder in current items
    componentDidMount() {
        // get all menu items
        API.getMenu()
            .then(data => {
                this.setState({ menuOptions: data.data });
            });
    }

    // ==============================================================
    // Handle adding and deleting items 

    handleAdd = newMenuItem => {
        API.saveMenu(newMenuItem)
            .then(data => {
                const savedMenuItem = data.data;
                const totalMenu = [...this.state.menuOptions, savedMenuItem];
                this.setState({ menuOptions: totalMenu });
            });
    }

    handleDelete = index => {
        API.deleteMenu(index)
            .then(data => {
                const restOfMenu = this.state.menuOptions.filter(item => item._id !== index);
                this.setState({ menuOptions: restOfMenu });
            });
    }


    // ==============================================================
    // Render function 
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {
                    isAuthenticated() && (
                        <React.Fragment>
                            <h1 className="display-1">Manage</h1>
                            <div className="container">
                                <div className="card">
                                    <AddItem add={this.handleAdd} />
                                </div>
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        {this.state.menuOptions ?
                                            this.state.menuOptions.map(item => (
                                                <MenuItem key={item._id || +new Date()} {...item} delete={this.handleDelete} />
                                            )) :
                                            null}
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a
                                style={{ cursor: 'pointer' }}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </a>
                            {' '}to continue.
                          </h4>
                    )
                }
            </div>
        );
    }
}

export default Manager;
