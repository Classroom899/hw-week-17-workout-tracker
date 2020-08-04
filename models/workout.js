const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutPlan = new Schema({

  exercises: {
    id: String,
    exercises: [String],
  },
});

// Whenever I add a record into this model, that we are inputting the correct id

const WorkoutModel = mongoose.model("WorkoutPlan", WorkoutPlan);

module.exports = WorkoutModel;