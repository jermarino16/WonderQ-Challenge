const { v4: uuidv4 } = require("uuid");

const mongoose = require("mongoose");

let DUMMY_AVAILABLE_MESSAGES = [
  {
    content: "Here is available message  for q1 u1",
    messageID: "10",
    queueID: "1",
    currentUserID: "u1",
  },
  {
    content: "Available Message  for q1 u1",
    messageID: "20",
    queueID: "1",
    currentUserID: "u1",
  },
  {
    content: "Available message for q2 u2",
    messageID: "30",
    queueID: "2",
    currentUserID: "u2",
  },
];

let DUMMY_POLLED_MESSAGES = [
  {
    content: "polled message q1",
    messageID: "40",
    queueID: "1",
    currentUserID: "u1",
  },
  {
    content: "polled message for q1 u1",
    messageID: "50",
    queueID: "1",
    currentUserID: "u1",
  },
  {
    content: "polled message for q2 u2",
    messageID: "60",
    queueID: "2",
    currentUserID: "u2",
  },
];

let DUMMY_QUEUE = [
  {
    name: "queue1",
    queueID: "1",
    availableMessages: DUMMY_AVAILABLE_MESSAGES,
    polledMessages: DUMMY_POLLED_MESSAGES,
  },
];

//needs auth to check if these messages belong  to user
const getMessagesByUserIDAndQueueID = async (req, res, next) => {
  const { userID, queueID } = req.params;

  const userMessages = DUMMY_POLLED_MESSAGES.filter(
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

//needs auth to check if this message belongs to user
const getMessageByMessageID = async (req, res, next) => {
  const { messageID } = req.params;

  const fetchedMessage = DUMMY_POLLED_MESSAGES.filter(
    (m) => m.messageID === messageID
  );

  if (!fetchedMessage.length) {
    res.json({
      message: `Sorry the message with ID: ${messageID} does not exist or is not polled to you`,
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

  DUMMY_AVAILABLE_MESSAGES.push(createdMessage);

  res.json({
    createdMessage,
    message: "Created the message",
  });
};

const modifyMessage = async (req, res, next) => {
  const { content, currentUserID } = req.body;
  const { messageID } = req.params;

  //search available messages for this
  let arrayTracker = 0;
  let updatedMessage = {
    ...DUMMY_AVAILABLE_MESSAGES.find((m) => m.messageID === messageID),
  };
  let messageIndex = DUMMY_AVAILABLE_MESSAGES.findIndex(
    (m) => m.messageID === messageID
  );

  if (!updatedMessage.length) {
    updatedMessage = {
      ...DUMMY_POLLED_MESSAGES.find((m) => m.messageID === messageID),
    };
    messageIndex = DUMMY_POLLED_MESSAGES.findIndex(
      (m) => m.messageID === messageID
    );
    arrayTracker = 1;
  }
  updatedMessage.content = content;
  if (currentUserID) {
    updatedMessage.currentUserID = currentUserID;
  }

  if (arrayTracker === 1) {
    DUMMY_POLLED_MESSAGES[messageIndex] = updatedMessage;
  }
  DUMMY_AVAILABLE_MESSAGES[messageIndex] = updatedMessage;

  res.json({
    updatedMessage,
    message: "Message updated",
  });
};

const deleteMessage = async (req, res, next) => {
  const { messageID } = req.params;
  let arrayTracker = 0;

  let deletedMessage = DUMMY_AVAILABLE_MESSAGES.filter(
    (m) => m.messageID === messageID
  );
  if (!deletedMessage.length) {
    deletedMessage = DUMMY_POLLED_MESSAGES.filter(
      (m) => m.messageID === messageID
    );
    arrayTracker = 1;
  }

  if (!deletedMessage.length) {
    res.json({
      message: `Sorry the message with ID: ${messageID} does not exist`,
    });
  }

  if (arrayTracker === 1) {
    DUMMY_POLLED_MESSAGES = DUMMY_POLLED_MESSAGES.filter(
      (m) => m.messageID !== messageID
    );
  }

  DUMMY_AVAILABLE_MESSAGES = DUMMY_AVAILABLE_MESSAGES.filter(
    (m) => m.messageID !== messageID
  );

  res.json({
    message: `Deleted the message with ID: ${messageID}`,
  });
};

const pollMessages = async (req, res, next) => {};

module.exports = {
  getMessagesByUserIDAndQueueID,
  getMessageByMessageID,
  createMessage,
  modifyMessage,
  deleteMessage,
  pollMessages,
};
