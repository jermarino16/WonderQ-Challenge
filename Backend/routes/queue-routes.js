const express = require("express");

const queuesControllers = require("../controllers/queue-controllers");

const router = express.Router();

router.get("/", queuesControllers.getQueues);

// FRONT END TASK
// router.get("/new", (req, res, next) => {
//   res.json({
//     message: "Show the create queue form",
//   });
// });

router.get("/:queueID", queuesControllers.getQueueByID);

router.post("/", queuesControllers.createQueue);

router.patch("/:queueID", queuesControllers.modifyQueue);

router.delete("/:queueID", queuesControllers.deleteQueue);

// FRONT END TASK
// router.get("/:queueID/edit", (req, res, next) => {
//   res.json({
//     message: "Display edit form of Queue",
//   });
// });

module.exports = router;
