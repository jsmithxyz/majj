const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create User schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  queue: [
    {
      type: String,
    },
  ],
  filter: [],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
