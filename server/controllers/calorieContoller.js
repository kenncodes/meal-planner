const asyncHandler = require('express-async-handler');
const { findByIdAndUpdate } = require('../models/calorieModel');
// @desc Get All Calories

const Calorie = require('../models/calorieModel');

const getCalories = asyncHandler(async (req, res) => {
    const calories = await Calorie.find({ user: req.user.id })

    res.status(200).json(calories)
})

const getCaloriesFromWorkouts = asyncHandler(async (req, res) => {
    const calories = await Calorie.find({ calorieType: false,  user: req.user.id })
    res.status(200).json(calories)
})

const getCaloriesFromMeals = asyncHandler(async (req, res) => {
    const calories = await Calorie.find({ calorieType: true,  user: req.user.id })
    res.status(200).json(calories)
})

//@desc Set a new calorie update
const setCaloriesFromWorkout = asyncHandler(async (req, res) => {
    if (!(req.body.amount > 0)) {
        res.status(400)
        throw new Error('Please add a positive calorie amount')
    }
    console.log(req.body.calorieType);
    if (!(req.body.calorieType)) {
        res.status(400)
        throw new Error('Please add a workout here')
    }
    if (!(req.body.date)) {
        res.status(400)
        throw new Error('Please add a date')
    }

    if (!(req.body.workoutTime)) {
        res.status(400)
        throw new Error('Please add a time')
    }
    if (!(req.body.workoutName)) {
        res.status(400)
        throw new Error('Please add a workout name')
    }
    const calories = await Calorie.create({
        calorieType: false,
        date: req.body.date,
        workoutName: req.body.workoutName,
        workoutTime: req.body.workoutTime,
        amount: req.body.amount,
        user: req.user.id
        
    })
    res.status(200).json(calories)
})

const setCaloriesFromMeal = asyncHandler(async (req, res) => {
    if (!(req.body.amount > 0)) {
        res.status(400)
        throw new Error('Please add a positive calorie amount')
    }

    if (!(req.body.date)) {
        res.status(400)
        throw new Error('Please add a date')
    }

    if (!req.body.calorieType) {
        res.status(400)
        throw new Error("Please only add meal here")
    }

    if (!(req.body.mealName)) {
        res.status(400)
        throw new Error('Please add a name')
    }

    const calories = await Calorie.create({
        calorieType: true,
        date: req.body.date,
        mealName: req.body.mealName,
        amount: req.body.amount,
        user: req.user.id
    })
    res.status(200).json(calories)
})

// edit the calorie  entry info
const updateCalories = asyncHandler(async (req, res) => {
    const calorie = await Calorie.findById(req.params.id)
    console.log(calorie);
    if (!calorie) {
        res.status(400)
        throw new Error("calorie entry not found")
    }
   // console.log(calorie.calorieType.toString())
   // console.log(req.body.calorieType)

    if(!(calorie.calorieType.toString() === req.body.calorieType)){
        res.status(400)
        throw new Error("must update the correct calorie change - workout or meal")
    }

    if(calorie.calorieType){
        if(!req.body.mealName || req.body.mealName===""){
            throw new Error("no name provided")
        }
        if(!req.body.amount || req.body.amount==="" || req.body.amount < 0){
            throw new Error("no calorie amount provided or insufficient")
        }
    }

    if(!calorie.calorieType){
        if(!req.body.workoutName || req.body.workoutName===""){
            throw new Error("no name provided")
        }
        if(!req.body.workoutName || req.body.workoutTime ===""){
            throw new Error("no name provided")
        }
        if(!req.body.amount || req.body.amount==="" || req.body.amount < 0){
            throw new Error("no calorie amount provided or insufficient")
        }
    }


    const updatedGoal = await Calorie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    
      res.status(200).json(updatedGoal)
})

const deleteCalories = asyncHandler(async (req, res) => {
    const calories = await Calorie.findById(req.params.id)
    
    if(!calories){
        res.status(400)
        throw new Error("calories not found")
    }

    await calories.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getCalories,
    getCaloriesFromWorkouts,
    getCaloriesFromMeals,
    setCaloriesFromWorkout,
    setCaloriesFromMeal,
    updateCalories,
    deleteCalories
}