// goes in /scripts

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const userSeed = [
  {
    username: "default",
    password: "noUser",
    types: ["all"],
    topics: ["all"]
  },
  {
    username: "James",
    password: "james",
    types: [],
    topics: []
  }, {
    username: "Alyssa",
    password: "alyssa",
    types: [],
    topics: []
  }, {
    username: "Jordan",
    password: "jordan",
    types: [],
    topics: []
  }, {
    username: "Max",
    password: "max",
    types: [],
    topics: []
  }
];

const savedMajjSeed = [
  {
    title: "",
    url: ""
  },
  {
    title: "",
    url: ""
  },
  {
    title: "",
    url: ""
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.savedMajj
  .remove({})
  .then(() => db.savedMajj.collection.insertMany(savedMajjSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
