const mongoose = require('mongoose')
const task = require('./task').schema

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  tasks: [task]
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project