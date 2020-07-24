"use strict";

const PushtoDB = require("./pushtoDB");
const PushtoSlack = require("./pushtoSlack");

module.exports.runMessage = (Request) => {
  var Response = { code: 200, status: "recieved by gRPC server" };
  console.log(Request.msg);
  PushtoDB.pushtoDB(Request);
  PushtoSlack.pushtoSlack(Request.msg);
  return Response;
};
