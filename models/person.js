const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: String
})

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person