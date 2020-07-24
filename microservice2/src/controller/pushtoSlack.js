"use strict";

const axios = require("axios");

module.exports.pushtoSlack = (msg) => {
  console.log(msg);
  axios({
    method: "POST",
    url: process.env.SLACK_WEBHOOK,
    data: {
      text: msg,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
