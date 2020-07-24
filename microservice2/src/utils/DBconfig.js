"use strict";

const mongoose = require("mongoose");

module.exports.connect = () => {
  console.log("connecting to DB...");
  const db_username = process.env.MONGOUSER;
  const db_password = process.env.MONGOPASS;

  // mongodb atlas configuration
  const url = `mongodb+srv://${db_username}:${db_password}@cluster0-d435h.mongodb.net/digiretail?retryWrites=true&w=majority`;
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected..."))
    .catch((err) => console.log(err));
};
