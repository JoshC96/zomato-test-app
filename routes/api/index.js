const router = require("express").Router();
const cuisineRoutes = require("./cuisines");

router.use("/cuisines", cuisineRoutes);

module.exports = router;
