const express = require('express')
const router = express.Router()
const Person = require('../models/person')

router.get('/people', async (req, res)=>{
  try{
    const people = await Person.find({})
    res.send(people)
  } catch(err){
    res.status(400).send(err)
  }
})

router.post('/person', async (req, res)=>{
  try{
    const person = new Person(req.body)
    await person.save()
    res.send(person)
  } catch(err){
    res.status(400).send(err)
  }
})

router.get('/person/:id', async (req, res)=>{
  try{
    const person = await Person.findById(req.params.id)
    res.send(person)
  } catch(err){
    res.status(400).send(err)
  }
})

module.exports = router