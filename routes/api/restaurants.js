const router = require("express").Router();
const zomatoController = require("../../zomatoController");

// Matches with "/api/restaurants"
router
    .route("/restaurants")
    .get(zomatoController.getRestaurant);


module.exports = router;
