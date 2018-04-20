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
  saveOrder: function(bookData) {
    return axios.post("/api/order", orderData);
  }
};
