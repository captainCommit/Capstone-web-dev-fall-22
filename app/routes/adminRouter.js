const express = require("express");
const adminRouter = express.Router();
const { MessageModel } = require("../models/Message");
const { UserModel } = require("../models/User");

adminRouter.get("/messages", (req, res) => {
  MessageModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("This is error", err);
    } else {
      res.status(200).send(data);
      console.log("This is data", data);
    }
  });
});

adminRouter.get("/users-list", (req, res) => {
  UserModel.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("This is error", err);
    } else {
      res.status(200).send(data);
      console.log("This is data", data);
    }
  });
});

module.exports = { adminRouter };
