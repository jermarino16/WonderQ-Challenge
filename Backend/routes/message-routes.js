const express = require("express");

const messagesControllers = require("../controllers/message-controllers");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get request in users");
  res.json({ message: "Message get `/` works" });
});

module.exports = router;
