"use strict";

const PushtoDB = require("./pushtoDB");

module.exports.runMessage = (Request) => {
  var Response = { code: 200, status: "recieved by gRPC server" };
  console.log(Request.msg);
  PushtoDB.pushtoDB(Request);
  return Response;
};
