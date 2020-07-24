"use strict";

const axios = require("axios");

module.exports.pushtoSlack = (msg) => {
  console.log(msg);
  axios({
    method: "POST",
    url:
      "https://hooks.slack.com/services/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",
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
