const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/keys").mongoURI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Added routes, both Database Routes and view Route
app.use(routes);
// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// routes
app.use("/api/users", users);

// temp mongoose connection for authentication test
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
