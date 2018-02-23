const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  try {
    const blogs = await Blog.find({})
    response.json(blogs.map(Blog.format))    
  } catch (error) {
    console.log(error)
    response.status(404).end     
  }
})

  
blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)
  
  blog
    .save()
    .then(result => {
      response.status(201).json(Blog.format(result))
    })
    .catch(error => {
      console.log(error)
      response.status(404).end   
    })
})

module.exports = blogsRouter