const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/posts', async (req, res)=>{
  try{
    const posts = await Post.find({})
    res.send(posts)
  } catch(err){
    res.status(500).send(err)
  }
})

router.get('/posts/:id', async (req, res)=>{
  try{
    const post = await Post.findById(req.params.id)
    res.send(post)
  } catch(err){
    res.send(err)
  }
})

router.post('/posts', async (req, res)=>{
  try{
    const newPost = await new Post(req.body)
    newPost.save()
    res.send(newPost)
  } catch(err){
    res.status(500).send(err)
  }
})


module.exports = router