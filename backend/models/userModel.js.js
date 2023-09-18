const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  creationTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userModel);
