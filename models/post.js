const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
  img: String,
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
