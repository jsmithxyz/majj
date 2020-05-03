const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/database/user"
router.route("/").put(usersController.update);

router.route("/:user").get(usersController.getQueue);

module.exports = router;
