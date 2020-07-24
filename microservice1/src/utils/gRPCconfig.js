"use strict";

const PROTO_PATH = __dirname + "/grpc.proto";
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

var messenger_proto = grpc.loadPackageDefinition(packageDefinition).messenger;

const client = new messenger_proto.PushMsg(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = client;
