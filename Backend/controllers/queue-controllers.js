const mongoose = require("mongoose");

const Queue = require("../models/queue");

const DUMMY_QUEUES = [
  { name: "queue1", queueID: "1" },
  { name: "queue2", queueID: "2" },
];

const getQueues = async (req, res, next) => {
  res.json({ queues: DUMMY_QUEUES, message: "Return list of all queues" });
};

const getQueueByID = async (req, res, next) => {
  const { queueID } = req.params;

  let queue = DUMMY_QUEUES.filter((q) => q.queueID === queueID);

  if (!queue.length) {
    res.json({
      message: "There is no queue with that associated ID",
    });
  }

  res.json({ queue, message: "Here's your queue" });
};

const createQueue = async (req, res, next) => {
  const { name } = req.body;

  const createdQueue = new Queue({ name });

  res.json({
    createdQueue,
    message: "Creates a new Queue and returns that Queue information",
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
    message: "Your queue has been modified",
  });
};

const deleteQueue = async (req, res, next) => {
  res.json({
    message: "Deletes a queue",
  });
};

module.exports = {
  getQueues,
  getQueueByID,
  createQueue,
  modifyQueue,
  deleteQueue,
};
