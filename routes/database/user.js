const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/database/user"
router
  .route("https://salty-ocean-88914.herokuapp.com/")
  .put(usersController.update);

module.exports = router;
