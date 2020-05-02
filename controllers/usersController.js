const db = require("../models");

module.exports = {
  update: function (req, res) {
    db.User.findOneAndUpdate({ username: req.body.username }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
