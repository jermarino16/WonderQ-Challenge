const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Queue = require("../models/queue");
const Message = require("../models/message");
const User = require("../models/user");

const getQueues = async (req, res, next) => {
  const name1 = "DUMMY DATA1";
  const name2 = "DUMMY DATA2";

  const queueList = [];
  const dummy_queue1 = new Queue({ name1 });
  const dummy_queue2 = new Queue({ name2 });
  queueList.push(dummy_queue1);
  queueList.push(dummy_queue2);

  res.json({ queues: queueList, message: "Return list of all queues" });
};

const getQueueByID = async (req, res, next) => {
  res.json({ message: "Display a queue based on queueID" });
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
  res.json({
    message: "Modifies a queue",
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
