const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  forWho: String,
  items: [{
  	_id: String,
  	name: String,
  	price: Number,
  	quantity: Number
  }],
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
