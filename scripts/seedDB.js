const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_lrwsp73t:2tqkdih5fn5qn5a8mrj6q4tnph@ds111798.mlab.com:11798/heroku_lrwsp73t" || "mongodb://localhost/my_db"
  );

const itemSeed = [
{
  "category": "Kids",
  "name": "Chicken Fingers and Onion Rings",
  "image": "Chicken_Fingers_and_Onion_Rings.jpg",
  "price": 10.65
}, {
  "category": "Kids",
  "name": "Burger and Fries",
  "image": "Burger_and_Fries.jpg",
  "price": 10.12
}, {
  "category": "Kids",
  "name": "Koshier Hot Dog",
  "image": "Koshier_Hot_Dog.jpg",
  "price": 7.79
}, {
  "category": "Kids",
  "name": "Margharetti Pizza",
  "image": "Margharetti_Pizza.jpg",
  "price": 8.50
}, {
  "category": "Kids",
  "name": "Pizza Bites and Fries",
  "image": "Pizza_Bites_and_Fries.jpg",
  "price": 8.90
}, {
  "category": "Kids",
  "name": "Spaghetti with Red Sauce",
  "image": "Spaghetti_with_Red_Sauce.jpg",
  "price": 9.28
}, {
  "category": "Specials",
  "name": "Alaskan King Crab Legs",
  "image": "Alaskan_King_Crab_Legs.jpg",
  "price": 9.18
}, {
  "category": "Specials",
  "name": "Artisan Burger",
  "image": "Artisan_Burger.jpg",
  "price": 11.77
}, {
  "category": "Specials",
  "name": "Clam and Mussel Broil",
  "image": "Clam_and_Mussel_Broil.jpg",
  "price": 9.26
}, {
  "category": "Specials",
  "name": "Garlic Lamb with Mashed Potatoes",
  "image": "Garlic_Lamb_with_Mashed_Potatoes.jpg",
  "price": 9.33
}, {
  "category": "Specials",
  "name": "Sea Bass and New Potatoes",
  "image": "Sea_Bass_and_New_Potatoes.jpg",
  "price": 10.91
}, {
  "category": "Specials",
  "name": "Spinach and Avacado Salad",
  "image": "Spinach_and_Avacado_Salad.jpg",
  "price": 13.66
}, {
  "category": "Entrees",
  "name": "Artisan Pizza with Peppers and Sausage",
  "image": "Artisan_Pizza_with_Peppers_and_Sausage.jpg",
  "price": 10.93
}, {
  "category": "Entrees",
  "name": "Fried Chicken Sandwich with Red Cabbage",
  "image": "Fried_Chicken_Sandwich_with_Red_Cabbage.jpg",
  "price": 14.39
}, {
  "category": "Entrees",
  "name": "Pesto Pasta with Tomatoes",
  "image": "Pesto_Pasta_with_Tomatoes.jpg",
  "price": 13.46
}, {
  "category": "Entrees",
  "name": "Pulled Pork Sandwich",
  "image": "Pulled_Pork_Sandwich.jpg",
  "price": 9.89
}, {
  "category": "Entrees",
  "name": "Salmon and Vegetables",
  "image": "Salmon_and_Vegetables.jpg",
  "price": 9.82
}, {
  "category": "Entrees",
  "name": "Steak and Broccoli",
  "image": "Steak_and_Broccoli.jpg",
  "price": 14.70
}, {
  "category": "Appetizers",
  "name": "Caprese",
  "image": "Caprese.jpg",
  "price": 6.68
}, {
  "category": "Appetizers",
  "name": "Loaded Fries",
  "image": "Loaded_Fries.jpg",
  "price": 6.22
}, {
  "category": "Appetizers",
  "name": "Loaded Nachos",
  "image": "Loaded_Nachos.jpg",
  "price": 6.55
}, {
  "category": "Appetizers",
  "name": "Squash Soup",
  "image": "Squash_Soup.jpg",
  "price": 6.42
}, {
  "category": "Appetizers",
  "name": "Steamed Dumplings",
  "image": "Steamed_Dumplings.jpg",
  "price": 6.20
}, {
  "category": "Appetizers",
  "name": "Street Tacos",
  "image": "Street_Tacos.jpg",
  "price": 6.44
}, {
  "category": "Desserts",
  "name": "Cake Parfait",
  "image": "Cake_Parfait.jpg",
  "price": 7.58
}, {
  "category": "Desserts",
  "name": "Chocolate Cake",
  "image": "Chocolate_Cake.jpg",
  "price": 7.12
}, {
  "category": "Desserts",
  "name": "Cranberry Muffins",
  "image": "Cranberry_Muffins.jpg",
  "price": 6.82
}, {
  "category": "Desserts",
  "name": "Macaroons",
  "image": "Macaroons.jpg",
  "price": 7.98
}, {
  "category": "Desserts",
  "name": "Pecan Pudding",
  "image": "Pecan_Pudding.jpg",
  "price": 6.87
}, {
  "category": "Desserts",
  "name": "Rasberry and Chocolate Tart",
  "image": "Rasberry_and_Chocolate_Tart.jpg",
  "price": 5.95
}, {
  "category": "Drinks",
  "name": "Blue Ice and Lime Cocktail",
  "image": "Blue_Ice_and_Lime_Cocktail.jpg",
  "price": 3.27
}, {
  "category": "Drinks",
  "name": "Bottled Coke",
  "image": "Bottled_Coke.jpg",
  "price": 3.48
}, {
  "category": "Drinks",
  "name": "Early Grey Tea",
  "image": "Early_Grey_Tea.jpg",
  "price": 3.80
}, {
  "category": "Drinks",
  "name": "Latte",
  "image": "Latte.jpg",
  "price": 3.80
}, {
  "category": "Drinks",
  "name": "Mixed Berry Daiquiri",
  "image": "Mixed_Berry_Daiquiri.jpg",
  "price": 4.60
}, {
  "category": "Drinks",
  "name": "Strawberry and Watermelon Slush",
  "image": "Strawberry_and_Watermelon_Slush.jpg",
  "price": 3.37
}
];


const orderSeed = [
{
  "forWho": 14,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Entrees",
    "name": "Artisan Pizza with Peppers and Sausage",
    "image": "Artisan_Pizza_with_Peppers_and_Sausage.jpg",
    "price": 10.93
  }, {
    "category": "Entrees",
    "name": "Fried Chicken Sandwich with Red Cabbage",
    "image": "Fried_Chicken_Sandwich_with_Red_Cabbage.jpg",
    "price": 14.39
  }, {
    "category": "Entrees",
    "name": "Pesto Pasta with Tomatoes",
    "image": "Pesto_Pasta_with_Tomatoes.jpg",
    "price": 13.46
  },{
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  }, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  }, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  }]
},
{
  "forWho": 14,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Appetizers",
    "name": "Squash Soup",
    "image": "Squash_Soup.jpg",
    "price": 6.42
  }, {
    "category": "Appetizers",
    "name": "Steamed Dumplings",
    "image": "Steamed_Dumplings.jpg",
    "price": 6.20
  }]
},
{
  "forWho": 14,
  "date": new Date(Date.now()),
  "items": [ {
    "category": "Kids",
    "name": "Spaghetti with Red Sauce",
    "image": "Spaghetti_with_Red_Sauce.jpg",
    "price": 9.28
  }, {
    "category": "Specials",
    "name": "Alaskan King Crab Legs",
    "image": "Alaskan_King_Crab_Legs.jpg",
    "price": 9.18
  }, {
    "category": "Specials",
    "name": "Artisan Burger",
    "image": "Artisan_Burger.jpg",
    "price": 11.77
  }]
},
{
  "forWho": 12,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Drinks",
    "name": "Early Grey Tea",
    "image": "Early_Grey_Tea.jpg",
    "price": 3.80
  }, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  },{
    "category": "Entrees",
    "name": "Salmon and Vegetables",
    "image": "Salmon_and_Vegetables.jpg",
    "price": 9.82
  }, {
    "category": "Entrees",
    "name": "Steak and Broccoli",
    "image": "Steak_and_Broccoli.jpg",
    "price": 14.70
  }]
},
{
  "forWho": 12,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Drinks",
    "name": "Blue Ice and Lime Cocktail",
    "image": "Blue_Ice_and_Lime_Cocktail.jpg",
    "price": 3.27
  }]
},
{
  "forWho": 13,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Appetizers",
    "name": "Street Tacos",
    "image": "Street_Tacos.jpg",
    "price": 6.44
  }, {
    "category": "Desserts",
    "name": "Cake Parfait",
    "image": "Cake_Parfait.jpg",
    "price": 7.58
  }, {
    "category": "Entrees",
    "name": "Fried Chicken Sandwich with Red Cabbage",
    "image": "Fried_Chicken_Sandwich_with_Red_Cabbage.jpg",
    "price": 14.39
  }, {
    "category": "Entrees",
    "name": "Pesto Pasta with Tomatoes",
    "image": "Pesto_Pasta_with_Tomatoes.jpg",
    "price": 13.46
  }]
}
];


db.Item
.remove({})
.then(() => db.Item.collection.insertMany(itemSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  console.log(data);
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  // process.exit(1);
});

db.Order
.remove({})
.then(() => db.Order.collection.insertMany(orderSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  console.log(data);
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  // process.exit(1);
});
