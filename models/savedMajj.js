// goes in /models


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedMajjSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

const SavedMajj = mongoose.model("SavedMajj", savedMajjSchema);

module.exports = SavedMajj;
