//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/user-routes");
const queueRoutes = require("./routes/queue-routes");
const messageRoutes = require("./routes/message-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

//ROUTES
app.use("/api/users", usersRoutes); //not used for this project
app.use("/api/queues", queueRoutes);
app.use("/api/queues/:queueID/messages", messageRoutes);
app.use((req, res, next) => {
  //   const error = new HttpError("Could not find this route.", 404);
  //   throw error;
  res.json({
    message: "Sorry no route for that",
  });
});

//START  SERVER
app.listen(5000);
