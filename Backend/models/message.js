const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  currentUserID: { type: String, required: true }, // will reference mongoose user
  messageID: { type: String, required: true }, // will be a mongoose objectID
  content: { type: String, required: true },
  queueTimeoutDate: { type: Date },
  queueID: { type: mongoose.Types.ObjectId, required: true, ref: "Queue" },
});

module.exports = mongoose.model("Message", messageSchema);
