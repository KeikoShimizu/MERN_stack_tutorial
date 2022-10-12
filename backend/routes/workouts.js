const express = require('express')
const {
    getWorkout,
    getWorkout,
    createWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
//１。ラウターを作る
const router = express.Router()


//2.色々なるクエストをセットするそして、server。jsのapp.use('/api/workout',workoutRoutes)の、このAPIでつかう！
//GET all workouts
router.get('/', getWorkouts)

//Get a single werkout
router.get('/:id', getWorkout)

///POST a new workout
router.post('/', createWorkout)
///DELETE a new workout
router.delete('/:id', deleteWorkout)
///UPDATE a new workout
router.patch('/:id', updateWorkout)
module.exports = router