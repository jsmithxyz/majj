const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongodb connection - will need to set MONGODB_URI into .env when time comes
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/majj", {
  useNewUrlParser: true,
});

// Send every request to the React app
// Define any API routes before this runs
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
