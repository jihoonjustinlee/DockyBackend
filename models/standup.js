const mongoose = require('mongoose')

const StandupSchema = new mongoose.Schema({
  name: String,
  yesterday: String,
  today: String,
  other: String,
  date: {
    type: Date,
    default: Date.now
  }
})

const Standup = mongoose.model('Standup', StandupSchema)
module.exports = Standup