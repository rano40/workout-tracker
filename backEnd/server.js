require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRouter = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express App
const app = express();

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRouter)
app.use('/api/user', userRoutes)

// app.get('/', (req, res) => {
//     res.json({mssg: "Welcome to Exercise Tracker App"})
// })

// Connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT);
    })
}).catch((error) => {
    console.log(error);
})


