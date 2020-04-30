const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/majj");

const userSeed = [
  {
    username: "default",
    password: "noUser",
    queue: [],
    filter: {},
  },
  {
    username: "James",
    password: "james",
    queue: [],
    filter: {},
  },
  {
    username: "Alyssa",
    password: "alyssa",
    queue: [],
    filter: {},
  },
  {
    username: "Jordan",
    password: "jordan",
    queue: [],
    filter: {},
  },
  {
    username: "Max",
    password: "max",
    queue: [],
    filter: {},
  },
];

const savedItemSeed = [
  {
    title: "",
    url: "",
  },
  {
    title: "",
    url: "",
  },
  {
    title: "",
    url: "",
  },
];

db.User.collection
  .insertMany(userSeed)
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Item.collection
  .insertMany(savedItemSeed)
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
