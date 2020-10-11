const Workout = require("../models/workoutSchema.js");

module.exports = function(app) {
  
  app.get("/api/workouts", function(req, res) {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
  });

  app.get("/api/workouts/range", function(req, res) {
    Workout.find({})
    .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    });

    app.put("/api/workouts/:id", function(req, res) {
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", function(req, res) {
        Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
};