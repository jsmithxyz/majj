// goes in /models


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gemSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

const Gem = mongoose.model("Gem", gemSchema);

module.exports = Gem;
