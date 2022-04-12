const express = require("express")
const router = express.Router()
const {getCalories, getCaloriesFromWorkouts,
    getCaloriesFromMeals,
    setCaloriesFromWorkout, setCaloriesFromMeal,
    updateCalories,
    deleteCalories } = require("../controllers/calorieContoller")
const { route } = require("./userRoutes")

router.get("/", getCalories)
router.get("/workouts",getCaloriesFromWorkouts)
router.get("/meals",getCaloriesFromMeals)
router.post('/workout/add', setCaloriesFromWorkout)
router.post('/meal/add', setCaloriesFromMeal)
router.put('/:id',updateCalories)
router.delete('/:id', deleteCalories)


module.exports = router