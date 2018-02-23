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

  
blogsRouter.post('/', async (request, response) => {
  try {
    const body = request.body 

    if (body.title === undefined || body.url === undefined) {
      return response.status(400).json({ error: 'Bad request'})
    }

    if (body.likes === undefined) {
      body.likes = 0
    }

    const blog = new Blog(body)

    const savedBlog = await blog.save()
    response.status(201).json(Blog.format(savedBlog))
  } catch (error) {
    console.log(error)
    response.status(404).end 
  }
})

module.exports = blogsRouter