const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const queueSchema = new Schema({
  availableMessages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
  name: { type: String, required: true },
  messageRetentionTime: { type: Number },
  maxMessageCount: { type: Number },
  polledMessages: {
    users: [
      {
        userID: { type: mongoose.Types.ObjectId },
        messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
      },
    ],
  },
});

module.exports = mongoose.model("Queue", queueSchema);
