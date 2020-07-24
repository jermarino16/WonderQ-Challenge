const express = require("express");

const messageControllers = require("../controllers/message-controllers");

const router = express.Router();

router.get("/user/:uid", (req, res, next) => {
  res.json({ message: "Shows all messages that a user has polled." });
});

router.get("/new", (req, res, next) => {
  res.json({
    message: "Shows the create message form for a Queue",
  });
});

router.get("/:messageID", (req, res, next) => {
  res.json({
    message:
      "Display one message based on message ID. Messages can only be read have to be by users with associated user ID's.",
  });
});

router.post("/:messageID", (req, res, next) => {
  res.json({
    message:
      "Creates a message based on body content. Returns the message object created and wil add to available messages to the Queue with associated ID. Only admins can create messages.",
  });
});

router.patch("/:messageID", (req, res, next) => {
  res.json({
    message:
      "Updates a message based on body content, and userID. Returns updated message in response. Only admin's can update messages. ",
  });
});

router.delete("/:messageID", (req, res, next) => {
  res.json({
    message:
      "Deletes a message based on message ID. Only an admin can delete messages.",
  });
});

router.get("/:messageID/edit", (req, res, next) => {
  res.json({
    message: "Display edit form of one message",
  });
});

module.exports = router;
