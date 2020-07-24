"use strict";

const mongoose = require("mongoose"); //import mongoose module
const Schema = mongoose.Schema; //create schema object

//meal schema defination
const messageSchema = mongoose.Schema({
  //getting user reference from user schema to store the user Id
  msg: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//export mongoose model
module.exports = mongoose.model("Messages", messageSchema);
