const express = require("express");

const messageControllers = require("../controllers/message-controllers");

const router = express.Router();

const baseURL = "/:queueID/messages";

router.get(
  `${baseURL}/user/:userID`,
  messageControllers.getMessagesByUserIDAndQueueID
);

// FRONT END TASK
// router.get("/new", (req, res, next) => {
//   res.json({
//     message: "Shows the create message form for a Queue",
//   });
// });

router.get(`${baseURL}/:messageID`, messageControllers.getMessageByMessageID);

router.post(`${baseURL}/:messageID`, messageControllers.createMessage);

router.patch(`${baseURL}/:messageID`, messageControllers.modifyMessage);

router.delete(`${baseURL}/:messageID`, messageControllers.deleteMessage);

//FRONT END TASK
// router.get("/:messageID/edit", (req, res, next) => {
//   res.json({
//     message: "Display edit form of one message",
//   });
// });

module.exports = router;
