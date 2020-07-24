const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Queue = require("../models/queue");
const Message = require("../models/message");
const User = require("../models/user");

const getMessagesByUserID = async (req, res, next) => {
  res.json({ message: "Shows all messages that a user has polled." });
};

const getMessageByMessageID = async (req, res, next) => {
  res.json({
    message:
      "Display one message based on message ID. Messages can only be read have to be by users with associated user ID's.",
  });
};

const createMessage = async (req, res, next) => {
  res.json({
    message:
      "Creates a message based on body content. Returns the message object created and wil add to available messages to the Queue with associated ID. Only admins can create messages.",
  });
};

const modifyMessage = async (req, res, next) => {
  res.json({
    message:
      "Updates a message based on body content, and userID. Returns updated message in response. Only admin's can update messages. ",
  });
};

const deleteMessage = async (req, res, next) => {
  res.json({
    message:
      "Deletes a message based on message ID. Only an admin can delete messages.",
  });
};

module.exports = {
  getMessagesByUserID,
  getMessageByMessageID,
  createMessage,
  modifyMessage,
  deleteMessage,
};
