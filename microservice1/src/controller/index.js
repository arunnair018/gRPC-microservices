"use strict";

// grpc configuration
const PROTO_PATH = __dirname + "/grpc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
require("dotenv").config();

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const messenger_proto = grpc.loadPackageDefinition(packageDefinition).messenger;

module.exports.messenger = (req, res) => {
  var Request = { hook: req.body.web_hook, msg: req.body.message };
  var HOST = "18.218.137.35:50051";

  // create Stub
  const client = new messenger_proto.PushMsg(
    HOST,
    grpc.credentials.createInsecure()
  );

  // call function through stub
  client.TransferMsg(Request, (err, Response) => {
    if (err) {
      res.json(err);
    } else {
      res.json(Response);
    }
  });
};
