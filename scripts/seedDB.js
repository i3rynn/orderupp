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
    "image": "Images/Kids/Chicken_Fingers_and_Onion_Rings.jpg",
    "price": 10.21,
    "desc": ""
}, {
    "category": "Kids",
    "name": "Burger and Fries",
    "image": "Images/Kids/Burger_and_Fries.jpg",
    "price": 10.75,
    "desc": ""
}, {
    "category": "Kids",
    "name": "Koshier Hot Dog",
    "image": "Images/Kids/Koshier_Hot_Dog.jpg",
    "price": 6.17,
    "desc": ""
}, {
    "category": "Kids",
    "name": "Margharetti Pizza",
    "image": "Images/Kids/Margharetti_Pizza.jpg",
    "price": 7.67,
    "desc": ""
}, {
    "category": "Kids",
    "name": "Pizza Bites and Fries",
    "image": "Images/Kids/Pizza_Bites_and_Fries.jpg",
    "price": 8.50,
    "desc": ""
}, {
    "category": "Kids",
    "name": "Spaghetti with Red Sauce",
    "image": "Images/Kids/Spaghetti_with_Red_Sauce.jpg",
    "price": 7.19,
    "desc": ""
}, {
    "category": "Specials",
    "name": "Alaskan King Crab Legs",
    "image": "Images/Specials/Alaskan_King_Crab_Legs.jpg",
    "price": 13.96,
    "desc": ""
}, {
    "category": "Specials",
    "name": "Artisan Burger",
    "image": "Images/Specials/Artisan_Burger.jpg",
    "price": 10.79,
    "desc": ""
}, {
    "category": "Specials",
    "name": "Clam and Mussel Broil",
    "image": "Images/Specials/Clam_and_Mussel_Broil.jpg",
    "price": 12.47,
    "desc": ""
}, {
    "category": "Specials",
    "name": "Garlic Lamb with Mashed Potatoes",
    "image": "Images/Specials/Garlic_Lamb_with_Mashed_Potatoes.jpg",
    "price": 10.40,
    "desc": ""
}, {
    "category": "Specials",
    "name": "Sea Bass and New Potatoes",
    "image": "Images/Specials/Sea_Bass_and_New_Potatoes.jpg",
    "price": 12.52,
    "desc": ""
}, {
    "category": "Specials",
    "name": "Spinach and Avacado Salad",
    "image": "Images/Specials/Spinach_and_Avacado_Salad.jpg",
    "price": 10.67,
    "desc": ""
}, {
    "category": "Entrees",
    "name": "Artisan Pizza with Peppers and Sausage",
    "image": "Images/Entrees/Artisan_Pizza_with_Peppers_and_Sausage.jpg",
    "price": 9.11,
    "desc": ""
}, {
    "category": "Entrees",
    "name": "Fried Chicken Sandwich with Red Cabbage",
    "image": "Images/Entrees/Fried_Chicken_Sandwich_with_Red_Cabbage.jpg",
    "price": 11.36,
    "desc": ""
}, {
    "category": "Entrees",
    "name": "Pesto Pasta with Tomatoes",
    "image": "Images/Entrees/Pesto_Pasta_with_Tomatoes.jpg",
    "price": 12.87,
    "desc": ""
}, {
    "category": "Entrees",
    "name": "Pulled Pork Sandwich",
    "image": "Images/Entrees/Pulled_Pork_Sandwich.jpg",
    "price": 9.93,
    "desc": ""
}, {
    "category": "Entrees",
    "name": "Salmon and Vegetables",
    "image": "Images/Entrees/Salmon_and_Vegetables.jpg",
    "price": 9.16,
    "desc": ""
}, {
    "category": "Entrees",
    "name": "Steak and Broccoli",
    "image": "Images/Entrees/Steak_and_Broccoli.jpg",
    "price": 13.94,
    "desc": ""
}, {
    "category": "Appetizers",
    "name": "Caprese",
    "image": "Images/Appetizers/Caprese.jpg",
    "price": 5.72,
    "desc": ""
}, {
    "category": "Appetizers",
    "name": "Loaded Fries",
    "image": "Images/Appetizers/Loaded_Fries.jpg",
    "price": 7.35,
    "desc": ""
}, {
    "category": "Appetizers",
    "name": "Loaded Nachos",
    "image": "Images/Appetizers/Loaded_Nachos.jpg",
    "price": 7.64,
    "desc": ""
}, {
    "category": "Appetizers",
    "name": "Squash Soup",
    "image": "Images/Appetizers/Squash_Soup.jpg",
    "price": 7.32,
    "desc": ""
}, {
    "category": "Appetizers",
    "name": "Steamed Dumplings",
    "image": "Images/Appetizers/Steamed_Dumplings.jpg",
    "price": 5.46,
    "desc": ""
}, {
    "category": "Appetizers",
    "name": "Street Tacos",
    "image": "Images/Appetizers/Street_Tacos.jpg",
    "price": 5.39,
    "desc": ""
}, {
    "category": "Desserts",
    "name": "Cake Parfait",
    "image": "Images/Desserts/Cake_Parfait.jpg",
    "price": 7.81,
    "desc": ""
}, {
    "category": "Desserts",
    "name": "Chocolate Cake",
    "image": "Images/Desserts/Chocolate_Cake.jpg",
    "price": 5.30,
    "desc": ""
}, {
    "category": "Desserts",
    "name": "Cranberry Muffins",
    "image": "Images/Desserts/Cranberry_Muffins.jpg",
    "price": 6.66,
    "desc": ""
}, {
    "category": "Desserts",
    "name": "Macaroons",
    "image": "Images/Desserts/Macaroons.jpg",
    "price": 6.83,
    "desc": ""
}, {
    "category": "Desserts",
    "name": "Pecan Pudding",
    "image": "Images/Desserts/Pecan_Pudding.jpg",
    "price": 5.96,
    "desc": ""
}, {
    "category": "Desserts",
    "name": "Rasberry and Chocolate Tart",
    "image": "Images/Desserts/Rasberry_and_Chocolate_Tart.jpg",
    "price": 6.98,
    "desc": ""
}, {
    "category": "Drinks",
    "name": "Blue Ice and Lime Cocktail",
    "image": "Images/Drinks/Blue_Ice_and_Lime_Cocktail.jpg",
    "price": 2.48,
    "desc": ""
}, {
    "category": "Drinks",
    "name": "Bottled Coke",
    "image": "Images/Drinks/Bottled_Coke.jpg",
    "price": 4.50,
    "desc": ""
}, {
    "category": "Drinks",
    "name": "Early Grey Tea",
    "image": "Images/Drinks/Early_Grey_Tea.jpg",
    "price": 3.34,
    "desc": ""
}, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Images/Drinks/Latte.jpg",
    "price": 4.64,
    "desc": ""
}, {
    "category": "Drinks",
    "name": "Mixed Berry Daiquiri",
    "image": "Images/Drinks/Mixed_Berry_Daiquiri.jpg",
    "price": 2.74,
    "desc": ""
}, {
    "category": "Drinks",
    "name": "Strawberry and Watermelon Slush",
    "image": "Images/Drinks/Strawberry_and_Watermelon_Slush.jpg",
    "price": 2.92,
    "desc": ""
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
.then(() => db.Order.collection.insertMany(...orderSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  console.log(data);
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  // process.exit(1);
});
