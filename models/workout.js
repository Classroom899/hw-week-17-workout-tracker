const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlan = new Schema({
  day: {type: Date,
  default: Date.now},
  exercises: [Schema.Types.Mixed], // Allows mixed types
});

WorkoutPlan.virtual('totalDuration').get(function() {
  return "emily";
});

// Find an example from class using virtual and check mongoose first to see that it is there

// Whenever I add a record into this model, that we are inputting the correct id

const WorkoutModel = mongoose.model("WorkoutPlan", WorkoutPlan);
// WorkoutModel.createCollection();
module.exports = WorkoutModel;