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

function runMessage(Request) {
  console.log(Request);
  let Response = { res: "recieved" };
  return Response;
}

function TransferMsg(call, callback) {
  callback(null, runMessage(call.request));
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
