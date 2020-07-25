//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/user-routes");
const queueRoutes = require("./routes/queue-routes");
const messageRoutes = require("./routes/message-routes");

const app = express();

app.use(bodyParser.json());

//HEADERS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
//ROUTES
app.use("/api/users", usersRoutes); //not used for this project
app.use("/api/queues", queueRoutes);
app.use("/api/queues/", messageRoutes);
app.use((req, res, next) => {
  //   const error = new HttpError("Could not find this route.", 404);
  //   throw error;
  res.json({
    message: "404 Error: Sorry no route for that",
  });
});

//START  SERVER
app.listen(5000);
