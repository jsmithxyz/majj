const path = require("path");
const router = require("express").Router();
const databaseRoutes = require("./database");

// Database Routes
router.use("/database", databaseRoutes);

// If no Database routes are hit, send the React app
if (process.env.NODE_ENV === "production") {
  router.use("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

module.exports = router;
