"use strict";

module.exports.messenger = (req, res) => {
  console.log(req.body);
  res.json({ status: "recieved", payload: req.body.message });
};
