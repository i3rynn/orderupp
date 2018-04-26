import axios from "axios";

export default {
  // Gets all orders
  getOrder: function() {
    return axios.get("/api/order");
  },
  // Gets the order with the given id
  getOrder: function(id) {
    return axios.get("/api/order/" + id);
  },
  // Deletes the order with the given id
  deleteOrder: function(id) {
    return axios.delete("/api/order/" + id);
  },
  // Saves a order to the database
  saveOrder: function(orderData) {
    return axios.post("/api/order", orderData);
  },
  // Gets all menu items
  getMenu: function() {
    return axios.get("/api/menu");
  },
  // Gets the menu item with the given id
  getMenu: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the menu item with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a menu item to the database
  saveMenu: function(menuItem) {
    return axios.post("/api/menu", menuItem);
  }
};
