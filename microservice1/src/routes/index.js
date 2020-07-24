"use strict";

const service = require("../controller");
const {
  userValidationRules,
  validate,
} = require("../middlewares/jsonValidator");

module.exports = (app) => {
  app
    .route("/message")
    .post(userValidationRules(), validate, service.messenger);
};
