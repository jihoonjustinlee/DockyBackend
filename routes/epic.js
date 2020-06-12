const express = require('express')
const router = express.Router()
const Epic = require('../models/epic')

router.get('/epics', async (req, res)=>{
  try{
    const epics = await Epic.find({})
    res.send(epics)
  } catch(err){
    res.send(err)
  }
})

router.get('/epics/:id', async (req,res)=>{
  try{
    const epic = Epic.findById(req.params.id)
    res.send(epic)
  } catch(err){
    res.send(err)
  }
})

router.post('/epics', async (req, res)=>{
  try{
    const newEpic = await new Epic(req.body)
    newEpic.save()
    res.send(newEpic)
  } catch(err){
    res.send(err)
  }
})


module.exports = router