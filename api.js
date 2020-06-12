const express = require('express')
const router = express.Router()
const post = require('./routes/post')
const epic = require('./routes/epic')
const project = require('./routes/project')
const person = require('./routes/person')

router.use(post)
router.use(epic)
router.use(project)
router.use(person)

module.exports = router