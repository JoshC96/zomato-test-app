const router = require("express").Router();
const cuisineController = require("../../controllers/zomatoController");

// Matches with "/api/cuisines"
router
    .route("/")
    .get(cuisineController.allCuisines);


module.exports = router;
