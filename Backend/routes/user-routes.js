//USER ROUTES NOT USED FOR THIS PROJECT

const express = require("express");

const usersControllers = require("../controllers/user-controllers");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get request in users");
  res.json({ message: "User get `/` works" });
});

module.exports = router;
