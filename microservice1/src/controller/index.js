"use strict";

const client = require("../utils/gRPCconfig");

module.exports.messenger = (req, res) => {
  var Request = { msg: req.body.message };
  client.TransferMsg(Request, (err, Response) => {
    if (err) {
      console.log(err);
    } else {
      res.json(Response);
    }
  });
};
