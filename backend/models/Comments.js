const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  text: String,
  user: { type: String, default: "Anonim" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", CommentSchema);
