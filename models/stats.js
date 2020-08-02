const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StatsModel = new Schema({

  exercises: [{
    keys: Array,
    type: String, // What type of exercise is this - cardio, weights, etc.
    name: String, // Name will correlate to whatever type of workout it is
  }],
});

// const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

const Stats = mongoose.model("StatsModel", StatsModel);

module.exports = Stats;