"use strict";

const axios = require("axios");

module.exports.pushtoSlack = (Request) => {
  axios({
    method: "POST",
    url: Request.hook,
    data: {
      text: Request.msg,
    },
  })
    .then((res) => {
      console.log("posted to slack...");
    })
    .catch((err) => {
      console.log(err);
    });
};
