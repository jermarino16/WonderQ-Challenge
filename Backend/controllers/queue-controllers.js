const mongoose = require("mongoose");

const Queue = require("../models/queue");
const { create } = require("../models/queue");

let DUMMY_QUEUES = [
  { name: "queue1", queueID: "1" },
  { name: "queue2", queueID: "2" },
];

const getQueues = async (req, res, next) => {
  res.json({ queues: DUMMY_QUEUES, message: "Here's all of the queues" });
};

const getQueueByID = async (req, res, next) => {
  const { queueID } = req.params;

  let queue = DUMMY_QUEUES.filter((q) => q.queueID === queueID);

  if (!queue.length) {
    res.json({
      message: `There is no queue with the associated ID: ${queueID}`,
    });
  }

  res.json({ queue, message: `Here's your queue with ID: ${queueID}` });
};

const createQueue = async (req, res, next) => {
  const { name } = req.body;

  const createdQueue = { name, queueID: "3" }; // I can use a UUID for the queue right now but wont worry about it
  DUMMY_QUEUES.push(createdQueue);

  res.json({
    createdQueue,
    message: "Created a new queue",
  });
};

const modifyQueue = async (req, res, next) => {
  const { name } = req.body;
  const { queueID } = req.params;

  const updatedQueue = {
    ...DUMMY_QUEUES.find((q) => q.queueID === queueID),
  };
  const queueIndex = DUMMY_QUEUES.findIndex((q) => q.queueID === queueID);
  updatedQueue.name = name;

  DUMMY_QUEUES[queueIndex] = updatedQueue;

  res.json({
    queue: updatedQueue,
    message: `Queue with ID: ${queueID} has been modified`,
  });
};

const deleteQueue = async (req, res, next) => {
  const { queueID } = req.params;
  DUMMY_QUEUES = DUMMY_QUEUES.filter((q) => q.queueID !== queueID);
  res.json({
    queues: DUMMY_QUEUES,
    message: `Deleted the queue with ID: ${queueID}`,
  });
};

module.exports = {
  getQueues,
  getQueueByID,
  createQueue,
  modifyQueue,
  deleteQueue,
};
