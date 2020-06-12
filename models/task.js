const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  assigned_date:{
    type: Date,
    default: Date.now
  },
  assigned_to:[
    {
      name: String
    }
  ],
  description: {
    type: String,
    required: true
  },
  state: {
    type: String,
    default: 'Open',
    required: true
  }
})

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task