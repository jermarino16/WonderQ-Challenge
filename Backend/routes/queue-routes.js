const express = require("express");

const queuesControllers = require("../controllers/queue-controllers");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Return list of all available queues" });
});

router.get("/new", (req, res, next) => {
  res.json({
    message: "Show the create queue form",
  });
});

router.get("/:queueID", (req, res, next) => {
  res.json({ message: "Display a queue based on queueID" });
});

router.post("/:queueID", (req, res, next) => {
  res.json({
    message: "Creates a new Queue and returns that Queue information",
  });
});

router.patch("/:queueID", (req, res, next) => {
  res.json({
    message: "Modifies a queue",
  });
});

router.delete("/:queueID", (req, res, next) => {
  res.json({
    message: "Deletes a queue",
  });
});

router.get("/:queueID/edit", (req, res, next) => {
  res.json({
    message: "Display edit form of Queue",
  });
});

module.exports = router;
