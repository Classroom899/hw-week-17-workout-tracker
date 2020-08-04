// Import mongo, declare a schema 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Exercise = new Schema({
id: String,
  exercise: {
    type: "Cardio"| "Resistance",
    fid: String, // Foreign key id
  },
});

// Whenever I add a record into this model, that we are inputting the correct id

const ExerciseModel = mongoose.model("Exercise", Exercise);

module.exports = ExerciseModel;