const express = require('express')
const config = require('./config')

const app = express()
//SETTINGS
app.set('port', config.port)

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))


module.exports = app