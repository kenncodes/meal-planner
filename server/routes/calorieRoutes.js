const express = require("express")
const router = express.Router()
const {getCalories, getCaloriesFromWorkouts,
    getCaloriesFromMeals,
    setCaloriesFromWorkout, setCaloriesFromMeal,
    updateCalories,
    deleteCalories } = require("../controllers/calorieContoller")

const { protect } = require('../middleware/authMiddleware')


router.get("/", protect, getCalories)
router.get("/workouts", protect, getCaloriesFromWorkouts)
router.get("/meals",protect, getCaloriesFromMeals)
router.post('/workout/add', protect,  setCaloriesFromWorkout)
router.post('/meal/add', protect, setCaloriesFromMeal)
router.put('/:id', protect, updateCalories)
router.delete('/:id', protect,  deleteCalories)


module.exports = router