const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlan = new Schema({
  day: Date,
  exercises: [Schema.Types.Mixed], // Allows mixed types
});

// Whenever I add a record into this model, that we are inputting the correct id

const WorkoutModel = mongoose.model("WorkoutPlan", WorkoutPlan);
// WorkoutModel.createCollection();
module.exports = WorkoutModel;