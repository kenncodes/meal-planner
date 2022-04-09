const mongoose = require('mongoose')

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
    currentWeight: {

    },
},
    {
        timestamps: true
    }
)

modules.export = mongoose.model('User', userSchema)