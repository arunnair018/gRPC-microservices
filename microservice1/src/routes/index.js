"use strict";

const service = require("../controller");

module.exports = (app) => {
  app.route("/").post(service.messenger);
};
