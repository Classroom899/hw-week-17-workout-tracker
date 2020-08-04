const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceExercise = new Schema({
    id: String,
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
});

// Whenever I add a record into this model, that we are inputting the correct id

const ResistanceModel = mongoose.model("Resistance", ResistanceExercise);
// ResistanceExercise.createCollection();
module.exports = ResistanceModel;