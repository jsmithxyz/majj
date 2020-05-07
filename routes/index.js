const path = require("path");
const router = require("express").Router();
const databaseRoutes = require("./database");

// Database Routes
router.use("/database", databaseRoutes);

module.exports = router;
