const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongodbID = require("mongodb").ObjectID
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const WorkoutPlan = require("./models/workout");
const CardioModel = require("./models/cardio");
const ExerciseModel = require("./models/exercise")
const { response } = require("express");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lessondb", {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
})

app.get("/workout.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/workout.js"));
})

app.get("/api.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/api.js"));
})

app.get("/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/index.js"));
})

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/style.css"));
})

app.put("/api/workouts(/*)?", (req, res) => { // .* = to recognize any single character at any time
  let newExercise = null;
  const exerciseID = mongodbID();
  const eid = mongodbID();
  const wid = req.url[req.url.lastIndexOf("/")]
   if (req.data.type.lower == "cardio") {
     newExercise = {id: exerciseID, name: req.data.distance, distance: req.data.distance, duration:req.data.distance}
  CardioModel.create(newExercise).then(instance => {

    console.log(instance)
    

    ExerciseModel.create({id:eid,exercise:{type: "Cardio", fid: exerciseID}})
    
  }).then(WorkoutPlan.update(_id: wid, exercises: [eid]
 ,))
   } else {

   }
  });

app.get("/api/workouts/range", (req, res) => {
    WorkoutPlan.insertOne(res.data)
  });

app.get("/api/workouts", (req, res) => {
    WorkoutPlan.find()
      .then(workout => {
        if (workout.exercises && workout.exercises.length) {
          res.json(workout.exercises)
        } else {
          res.json([])
        }
        ;
      })
      .catch(err => {
        res.json(err);
      });
  });

app.post("/api/workouts", (req, res) => {
  const ObjectID = new mongodbID();
    WorkoutPlan.create({_id: ObjectID, exercises:[]}).then(data => {
      return res.json({_id: ObjectID});
    }).catch(err => {
  
    res.json(err);
})});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/exercise.html"));
  })

app.get("/exercise.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/exercise.js"));
  })

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/stats.html"));
  })

app.get("/stats.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/stats.js"));
  })
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  