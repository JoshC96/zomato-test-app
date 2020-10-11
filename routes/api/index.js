const router = require("express").Router();
const cuisineRoutes = require("./cuisines");
const restaurantRoutes = require("./restaurants");
const categoryRoutes = require("./categories");

router.use("/categories", categoryRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/cuisines", cuisineRoutes);

module.exports = router;
