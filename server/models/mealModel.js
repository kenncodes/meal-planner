const { urlencoded } = require("express")
const mongoose = require("mongoose")

const mealSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    calories: {
        type: String,
        required: [true, 'Please add calories']
    },
    img: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Meal', mealSchema)