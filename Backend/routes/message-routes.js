const express = require("express");

const messageControllers = require("../controllers/message-controllers");

const router = express.Router();

router.get("/user/:uid", messageControllers.getMessagesByUserID);

// FRONT END TASK
// router.get("/new", (req, res, next) => {
//   res.json({
//     message: "Shows the create message form for a Queue",
//   });
// });

router.get("/:messageID", messageControllers.getMessageByMessageID);

router.post("/:messageID", messageControllers.createMessage);

router.patch("/:messageID", messageControllers.modifyMessage);

router.delete("/:messageID", messageControllers.deleteMessage);

//FRONT END TASK
// router.get("/:messageID/edit", (req, res, next) => {
//   res.json({
//     message: "Display edit form of one message",
//   });
// });

module.exports = router;
