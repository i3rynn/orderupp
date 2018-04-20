const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  forWho: String,
  items: [{type: Schema.Types.ObjectId, ref: "Item"}],
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
