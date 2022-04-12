const mongoose = require('mongoose')

const calorieSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    calorieType: {
        type: Boolean,
        default: false,
        //false = 0 = -cal = workout
        //true = 1 = +cal = meal
    },
    amount: {
        type: Number,
        required: [true, "Please add a number"]
    },
    date: {
        type: Date,
        required: [true, "Please pick the date"],
    },
    mealName: {
        type: String
    },
    workoutTime: {
        type: Number
    },
    workoutName: {
        type:String
    }


}, {
    timestamps: true,
})

module.exports = mongoose.model('Calorie', calorieSchema)