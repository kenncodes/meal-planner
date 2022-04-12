const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
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
    startDate:{
        type: Date
    },
    currentWeight: {
        type: Number,
    },
    goalWeight: {
        type: Number
    },
    goalChange: {
        type:Number,
    }
},
    {
        timestamps: true
    }
)

modules.export = mongoose.model('User', userSchema)