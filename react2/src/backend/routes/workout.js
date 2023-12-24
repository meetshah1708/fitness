import express from 'express'
const router = express.Router()

import { getWorkout, getWorkouts, createWorkout, updateWorkout, deleteWorkout } from '../controllers/workoutControl.js'

//GET all workouts
router.get("/", getWorkouts)

//GET single workout
router.get("/:id", getWorkout)
//POST a workout
router.post("/", createWorkout)

// delete workout
router.delete("/:id", deleteWorkout)
//Update a workout
router.patch("/:id", updateWorkout)
export default router;