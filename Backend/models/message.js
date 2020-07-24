const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  currentUser: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  messageID: { type: mongoose.Types.ObjectId, required: true },
  content: { type: String, required: true },
  queueTimeoutDate: { type: Date, required: true },
  queueID: { type: mongoose.Types.ObjectId, required: true, ref: "Queue" },
});

module.exports = mongoose.model("Message", messageSchema);
