"use strict";

const mongoose = require("mongoose");

module.exports.connect = () => {
  console.log(`connecting to ${process.env.DB_URI}...`);

  // mongodb atlas configuration
  const url = process.env.DB_URI;
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected..."))
    .catch((err) => console.log(err));
};
