const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const WorkoutPlan = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [Schema.Types.Mixed], // Allows mixed types

}, opts);



WorkoutPlan.virtual('totalDuration').get(function () { // Calling the virtual method on the schema method
  // console.log('totalDuration');
  const totalDuration = this.exercises.reduce(function(prev, cur) {
    return prev + cur.duration;
  }, 0);
return totalDuration;
});

// Find an example from class using virtual ---

// Whenever I add a record into this model, that we are inputting the correct id

const WorkoutModel = mongoose.model("WorkoutPlan", WorkoutPlan);
// WorkoutModel.createCollection();
module.exports = WorkoutModel;