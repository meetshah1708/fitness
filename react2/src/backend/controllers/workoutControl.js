import mongoose from "mongoose";
import Workout from "../models/WorkoutModel.js";

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}
//get a Workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Id" })//id is not in proper format 
    }
    const workout = await Workout.findById(id)


    if (!workout) {
        res.status(404).json("no workout found")
    }
}
// create a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;//fetches data 
    //create a doc in db
    try {
        const workout = Workout.create({ title, reps, load })//process the data and store it
        
        res.status(200).json(workout)
        console.log(workout)

    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Id" })//id is not in proper format 
    }
    const workout = await Workout.findByIdAndDelete({ _id: id });
    if (!workout) {
        res.status(400).json("no workout found")
    }
    res.status(200).json(workout)
}
//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Id" })//id is not in proper format 
    }
    const workout = await Workout.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout) {
        res.status(400).json("no workout found")
    }
    res.status(200).json(workout)
}


export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout }