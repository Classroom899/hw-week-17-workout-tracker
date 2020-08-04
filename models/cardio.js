const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioExercise = new Schema({
    id: String,
    type: String,
    name: String,
    distance: Number,
    duration: Number,
});

// Whenever I add a record into this model, that we are inputting the correct id

const CardioModel = mongoose.model("Cardio", CardioExercise);
// CardioExercise.createCollection();
module.exports = CardioModel;