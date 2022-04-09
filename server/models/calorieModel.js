const mongoose = require('mongoose')

const calorieSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    calorieType: {
        type: Boolean,
        default: false,
    },
    amount: {
        type: Number,
        required: [true, "Please add a number"]
    }
}, {
    timestamps: true,
})