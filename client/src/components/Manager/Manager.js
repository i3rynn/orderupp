import React, { Component } from "react";
import API from "../../utils/API";
import AddItem from "./AddItem/AddItem";
import MenuItem from "./MenuItem/MenuItem";
import OrderItem from "./OrderItem/OrderItem";

class Manager extends Component {
    login() {
        this.props.auth.login();
    }
    state = {
        menuOptions: [], 
        orders: []
    };

    // ==============================================================
    // Component loads menu and sets a placholder in current items
    componentDidMount() {
        // get all menu items
        API.getMenu()
            .then(data => {
                this.setState({ menuOptions: data.data });
            });
        // get all orders
        API.getOrder()
            .then(data => {
                this.setState({ orders: data.data });
            });
    }

    // ==============================================================
    // Handle adding and deleting of menu items 

    handleAdd = newMenuItem => {
        API.saveMenu(newMenuItem)
            .then(data => {
                const savedMenuItem = data.data;
                const totalMenu = [savedMenuItem, ...this.state.menuOptions];
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
    // Handle completing orders 

    handleChangeCompleted = (orderId, isComplete) => {
        API.UpdateOrder(orderId, {complete: isComplete})
            .then(data => {
                const updatedOrders = this.state.map( order =>{
                    if(order._id === orderId){
                        order.complete = isComplete;
                    }
                    return order;
                });
                this.setState({orders: updatedOrders});
            });
    }

    // ==============================================================
    // Render function 
    render() {
        const { isAuthenticated } = this.props.auth;
        const renderMenuItem = item => (
            <MenuItem 
            key={item._id || +new Date()} 
            {...item} 
            delete={this.handleDelete}
             />);
        const renderOrder = order => (
            <OrderItem 
            key={order._id}
            {...order}
            changeComplete={this.handleChangeCompleted}
            />);
        return (
            <div>
                {
                    isAuthenticated() && (
                        <React.Fragment>
                            <h1 className="display-1">Manage</h1>
                            <div className="container">
                            <div class="card text-center">
                              <div class="card-header">
                                <ul class="nav nav-tabs card-header-tabs" role="tablist">
                                  <li class="nav-item">
                                    <a class="nav-link active" id="open-tab" data-toggle="tab" href="#open" role="tab" aria-controls="open" aria-selected="true">Open Orders</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" id="past-tab" data-toggle="tab" href="#past" role="tab" aria-controls="past" aria-selected="false">Past Orders</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" id="menu-tab" data-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="false">Manage Menu</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">Add To Menu</a>
                                  </li>
                                </ul>
                              </div>
                              <div class="card-body tab-content" id="myTabContent">
                                  <div class="tab-pane fade show active" id="open" role="tabpanel" aria-labelledby="open-tab">
                                  <ul class="list-group">
                                  {this.state.orders.map(renderOrder)}
                                  </ul>
                                  </div>
                                  <div class="tab-pane fade" id="past" role="tabpanel" aria-labelledby="past-tab">
                                  <ul class="list-group">
                                  {this.state.orders.map(renderOrder)}
                                  </ul>
                                  </div>
                                  <div class="tab-pane fade" id="menu" role="tabpanel" aria-labelledby="menu-tab">
                                  <ul class="list-group">
                                  {this.state.menuOptions.map(renderMenuItem)}
                                  </ul>
                                  </div>
                                  <div class="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
                                  <AddItem add={this.handleAdd} />
                                  </div>
                                </div>
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
