const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/user-routes");

const app = express();

app.use(bodyParser.json());

app.use(usersRoutes);

app.listen(5000);
