const mongoose = require('mongoose')

const EpicSchema = new mongoose.Schema({
  name: String,
  backgroundColor: String,
  fontColor: String,
  courses: [
    {
      name: String
    }
  ]
})

const Epic = mongoose.model('Epic', EpicSchema)
module.exports = Epic