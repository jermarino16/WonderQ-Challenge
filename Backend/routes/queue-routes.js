const express = require("express");

const queuesControllers = require("../controllers/queue-controllers");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get request in users");
  res.json({ message: "Queue get `/` works" });
});

module.exports = router;
