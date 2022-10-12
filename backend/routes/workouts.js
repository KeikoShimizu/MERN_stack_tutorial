const express = require('express')
const {
    getWorkout,
    getWorkout,
    createWorkout,
    getWorkouts,
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
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})
///UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})
module.exports = router