const mongoose = require('mongoose')
import weightModel from './weightModel'
import mealEatenModel from './mealEatenModel'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    startWeight: {
        type: Number

    },
    username: {
        type: String,
        required: false
    },
    weightUnit: {
        type: String
    },
},
    {
        timestamps: true
    }
)

modules.export = mongoose.model('User', userSchema)