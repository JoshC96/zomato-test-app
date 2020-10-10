const router = require("express").Router();
const cuisineRoutes = require("./cuisines");

router.use("/extras", cuisineRoutes);

module.exports = router;
