const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlan = new Schema({

  exercises: [{
    id: Number,
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    distance: Number,
  }],
});

// Whenever I add a record into this model, that we are inputting the correct id

const Workout = mongoose.model("WorkoutPlan", WorkoutPlan);

module.exports = Workout;