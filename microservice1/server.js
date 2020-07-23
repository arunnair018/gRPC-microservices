const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const PROTO_PATH = __dirname + "/grpc.proto";
var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares

// for logging request
app.use(morgan("tiny"));
// for handling cross-origin
app.use(cors());
// bodyParser to parse incoming request bodies in a middleware before our handlers
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

routes(app);

// start server to listen on PORT
app.listen(PORT, () => {
  console.log(`server started, listening at port ${PORT}...`);
});

// grpc
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

var messenger_proto = grpc.loadPackageDefinition(packageDefinition).messenger;
var client = new messenger_proto.PushMsg(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

var Request = { msg: "hello world" };
client.TransferMsg(Request, (err, Response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(Response);
  }
});
