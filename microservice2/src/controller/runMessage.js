"use strict";

const PushtoDB = require("./pushtoDB");
const PushtoSlack = require("./pushtoSlack");

module.exports.runMessage = (Request) => {
  PushtoDB.pushtoDB(Request);
  PushtoSlack.pushtoSlack(Request.msg);
  var Response = { code: 200, status: "recieved by gRPC server" };
  return Response;
};
