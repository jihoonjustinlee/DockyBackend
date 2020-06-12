const express = require('express')
const router = express.Router()
const Standup = require('../models/standup')

router.get('/standups', async (req, res)=>{
  try{
    const standups = await Standup.find({})
    res.send(standups)
  } catch(err){
    res.send(err)
  }
})


router.post('/standup', async (req, res)=>{
  try{
    const newStandup = await new Standup(req.body)
    newStandup.save()
    res.send(newStandup)
  } catch(err){
    res.send(err)
  }
})

module.exports = router