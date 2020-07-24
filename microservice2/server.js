require("dotenv").config();
const Messages = require("./src/models/messageSchema");
// connection to datbase
const db = require("./src/utils/DBconfig");
db.connect();

const runmessage = require("./src/controller/runMessage");

// gRPC server
const PROTO_PATH = __dirname + "/grpc.proto";
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");

// Suggested options for similarity to existing grpc.load behavior
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var messenger_proto = grpc.loadPackageDefinition(packageDefinition).messenger;

function TransferMsg(call, callback) {
  callback(null, runmessage.runMessage(call.request));
}

function getServer() {
  var server = new grpc.Server();
  server.addService(messenger_proto.PushMsg.service, {
    TransferMsg: TransferMsg,
  });
  return server;
}

var msgServer = getServer();
msgServer.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
msgServer.start();
