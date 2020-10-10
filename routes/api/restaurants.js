const router = require("express").Router();
const zomatoController = require("../../controllers/zomatoController");

// Matches with "/api/restaurants"
router
    .route("/")
    .get(zomatoController.getPlaces);

router
    .route("/:id")
    .get(zomatoController.getPlaceDetails);


module.exports = router;
