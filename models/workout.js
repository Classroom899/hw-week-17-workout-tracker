const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlan = new Schema({

  exercises: [{
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    distance: Number,
  }],
});

const Workout = mongoose.model("WorkoutPlan", WorkoutPlan);

module.exports = Workout;