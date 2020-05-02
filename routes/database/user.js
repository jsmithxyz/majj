const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/database/user"
router.route("/").put(usersController.update);

module.exports = router;
