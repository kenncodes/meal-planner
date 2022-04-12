console.log("Hello");

const express = require('express')
const dotenv = require('dotenv').config()
const connectDB =  require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()

const { errorHandler } = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/calories', require('./routes/calorieRoutes') )

app.use(errorHandler)
app.listen(port, () => console.log("Server started on port " + port))