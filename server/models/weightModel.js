const mongoose = require("mongoose")


const weightModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    amount: {
        type: Number
    },
    date: {
        type: new Date()
    }
})


module.exports = mongoose.model('Weight', weightSchema)