//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/user-routes");
const queueRoutes = require("./routes/queue-routes");
const messageRoutes = require("./routes/message-routes");

const app = express();

app.use(bodyParser.json());

//ROUTES
app.use("/api/users", usersRoutes); //not used for this project
app.use("/api/queues", queueRoutes);
app.use("/api/queues/:queueID/messages", messageRoutes);

//START  SERVER
app.listen(5000);
