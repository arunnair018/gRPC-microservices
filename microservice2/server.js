require("dotenv").config();

// message model
const Messages = require("./src/models/messageSchema");

// connection to datbase
const db = require("./src/utils/DBconfig");
db.connect();

// import grpc function
const runmessage = require("./src/controller/runMessage");

// gRPC server
const PROTO_PATH = __dirname + "/grpc.proto";
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
const PORT = process.env.PORT || 50051;

// Suggested options for similarity to existing grpc.load behavior
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var messenger_proto = grpc.loadPackageDefinition(packageDefinition).messenger;

// grpc function defination
function TransferMsg(call, callback) {
  callback(null, runmessage.runMessage(call.request));
}

// grpc server generator function
function getServer() {
  var server = new grpc.Server();
  server.addService(messenger_proto.PushMsg.service, {
    TransferMsg: TransferMsg,
  });
  return server;
}

// create grpc server object, bind to ip and start
var msgServer = getServer();
msgServer.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
msgServer.start();
