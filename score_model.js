const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  nick: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  avgPointsGainedOnFinish: {
    type: Number,
    required: true
  },
  bestAvgPoinsGainedTime: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Score", scoreSchema);
