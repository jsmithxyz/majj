const mongoose = require("mongoose");
const db = require("../models");
const herokuDB = require("./config/keys").mongoURI;

mongoose.connect(herokuDB);

const userSeed = [
  {
    username: "default",
    password: "noUser",
    queue: [],
    filter: {},
  },
  {
    name: "James",
    email: "james@majj.com",
    password: "jamespassword",
    queue: [],
    filter: {},
  },
  {
    name: "Alyssa",
    email: "alyssa@majj.com",
    password: "alyssapassword",
    queue: [],
    filter: {},
  },
  {
    name: "Jordan",
    email: "Jordan@majj.com",
    password: "jordanpassword",
    queue: [],
    filter: {},
  },
  {
    name: "Max",
    email: "max@majj.com",
    password: "maxpassword",
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

// db.Item.collection
//   .insertMany(savedItemSeed)
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
