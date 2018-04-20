const router = require("express").Router();
const menuRouter = require("../../controllers/menuRouter");

// Matches with "/api/order"
router.route("/")
  .get(menuRouter.findAll)
  .post(menuRouter.create);

// Matches with "/api/order/:id"
router
  .route("/:id")
  .get(menuRouter.findById)
  .put(menuRouter.update)
  .delete(menuRouter.remove);

module.exports = router;
