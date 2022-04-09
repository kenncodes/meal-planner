const mongoose = required("mongoose")

const mealEatenModel= mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    meal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Meal'
    },
    timeOfDay: {
        type: String
    }
},
    { 
        timestamps: true, 
    }
)

module.exports = mongoose.model('MealEaten', mealEatenSchema)