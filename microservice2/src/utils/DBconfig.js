"use strict";

const mongoose = require("mongoose");

module.exports.connect = () => {
  console.log("connecting to DB...");

  // mongodb atlas configuration
  const local_mongo = "mongodb://localhost:27017/DigiRetail";
  const url = process.env.MONGO_URL || local_mongo;
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected..."))
    .catch((err) => console.log(err));
};
