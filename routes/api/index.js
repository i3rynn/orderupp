const router = require("express").Router();
const order = require("./order");

// Book routes
router.use("/order", order);

module.exports = router;
