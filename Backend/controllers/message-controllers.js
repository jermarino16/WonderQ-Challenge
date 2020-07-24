const mongoose = require("mongoose");

const Message = require("../models/message");
const Queue = require("../models/queue");

let DUMMY_MESSAGES = [
  {
    content: "Here is dummy content for q1 u1",
    messageID: "10",
    queueID: "1",
    currentUserID: "1",
  },
  {
    content: "Dummy content for q1 u1",
    messageID: "20",
    queueID: "1",
    currentUserID: "1",
  },
  {
    content: "Dummy content for q2 u2",
    messageID: "30",
    queueID: "2",
    currentUserID: "2",
  },
];

const getMessagesByUserIDAndQueueID = async (req, res, next) => {
  const { userID, queueID } = req.params;

  const userMessages = DUMMY_MESSAGES.filter(
    (m) => m.currentUserID === userID && m.queueID === queueID
  );
  //validation checks can be done to see if the queue is valid,  or user id is valid
  //i will only check for messages
  if (!userMessages.length) {
    res.json({
      message: "Sorry there are no messages for that user or that queue",
    });
  }

  res.json({
    messages: userMessages,
    message: `Here are all messages from queue: ${queueID} that match the user ID: ${userID}`,
  });
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
  getMessagesByUserIDAndQueueID,
  getMessageByMessageID,
  createMessage,
  modifyMessage,
  deleteMessage,
};
