"use strict";

const mongoose = require("mongoose");
const Messages = mongoose.model("Messages");

module.exports.pushtoDB = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    Messages.create(msg, function (err, msg) {
      if (err) {
        reject(err);
      }
      resolve(msg);
    });
  });
};
