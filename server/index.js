console.log("Hello");

const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI);

app.get("/getUsers", (req, res) => {
    

})


app.listen(port, () => console.log("Server started on port " + port))