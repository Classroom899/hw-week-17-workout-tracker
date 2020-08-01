const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const WorkoutPlan = require("./models/workout");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessondb");
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
})

app.get("/api/workouts", (req, res) => {
    WorkoutPlan.find()
      .then(workout => {
        res.json(workout.exercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  