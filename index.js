const express = require('express')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/key')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const api = require('./api')
const path = require('path')

mongoose.connect(db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(()=>{console.log("MongoDB connected")})
  .catch((err)=>{throw err})

// app.use(history())
app.use(bodyParser.json())
app.use(cors())
app.use('/api', api)
app.use('/public', express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/dist'))
app.listen(port, ()=>{
  console.log(`Server on port ${port}`)
})

