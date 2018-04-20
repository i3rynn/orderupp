const router = require("express").Router();
const orderRouter = require("../../controllers/orderRouter");

// Matches with "/api/order"
router.route("/")
  .get(orderRouter.findAll)
  .post(orderRouter.create);

// Matches with "/api/order/:id"
router
  .route("/:id")
  .get(orderRouter.findById)
  .put(orderRouter.update)
  .delete(orderRouter.remove);

module.exports = router;
