const router = require("express").Router();
const cuisineRoutes = require("./cuisines");
const restaurantRoutes = require("./restaurants");

router.use("/restaurants", restaurantRoutes);
router.use("/cuisines", cuisineRoutes);

module.exports = router;
