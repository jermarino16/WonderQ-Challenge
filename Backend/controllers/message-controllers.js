const { v4: uuidv4 } = require("uuid");

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
  const { messageID } = req.params;

  const fetchedMessage = DUMMY_MESSAGES.filter(
    (m) => m.messageID === messageID
  );

  if (!fetchedMessage.length) {
    res.json({
      message: `Sorry there is no message with the message ID: ${messageID} `,
    });
  }

  res.json({
    fetchedMessage,
    message: `Here's your message with the message ID: ${messageID}`,
  });
};

const createMessage = async (req, res, next) => {
  const { content } = req.body;
  const { queueID } = req.params;

  const createdMessage = {
    content,
    messageID: uuidv4(),
    queueID,
    currentUserID: null,
  };

  DUMMY_MESSAGES.push(createdMessage);

  res.json({
    createdMessage,
    message: "Created the message",
  });
};

const modifyMessage = async (req, res, next) => {
  const { content, currentUserID } = req.body;
  const { messageID } = req.params;

  const updatedMessage = {
    ...DUMMY_MESSAGES.find((m) => m.messageID === messageID),
  };
  const messageIndex = DUMMY_MESSAGES.findIndex(
    (m) => m.messageID === messageID
  );
  updatedMessage.content = content;
  if (currentUserID) {
    updatedMessage.currentUserID = currentUserID;
  }
  DUMMY_MESSAGES[messageIndex] = updatedMessage;
  res.json({
    updatedMessage,
    message: "Message updated",
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
