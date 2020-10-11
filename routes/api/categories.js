const router = require("express").Router();
const zomatoController = require("../../controllers/zomatoController");

// Matches with "/api/categories"
router
    .route("/")
    .get(zomatoController.allCategories);


module.exports = router;
