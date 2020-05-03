const db = require("../models");

module.exports = {
  update: function (req, res) {
    db.User.findOneAndUpdate({ name: req.body.name }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getQueue: function (req, res) {
    console.log(req.body);
    db.User.findOne({ name: req.body.name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
