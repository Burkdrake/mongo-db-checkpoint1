const express = require('express');
const {urlencoded}= require ('express');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const {errorhandler} = require('./routes/middlewares/errorMid')
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(express.json())
app.use(urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorhandler)

app.listen(PORT, () => console.log (`server started at ${PORT}`))