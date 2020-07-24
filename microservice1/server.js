const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 6000;

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
