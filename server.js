const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Added routes, both Database Routes and view Route
app.use(routes);

// Mongodb connection - will need to set MONGODB_URI into .env when time comes
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/majj", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Mongoose Connected!"));

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
