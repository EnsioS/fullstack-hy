const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
  try {
    const blogs = await Blog
      .find({})
      .populate('user', { passwordHash: 0, blogs: 0, __v: 0})
    response.json(blogs.map(Blog.format))    
  } catch (error) {
    console.log(error)
    response.status(404).end()     
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

    const users = await User.find({})
    const user = users[0]

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user.id
    })

    const savedBlog = await blog.save()
    
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.status(201).json(Blog.format(savedBlog))
  } catch (error) {
    console.log(error)
    response.status(404).end() 
  }
})

blogsRouter.delete('/:id',  async (request, response) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)

    response.status(204).end()
  } catch (error) {
    console.log(error)
    response.status(400).send({ error: 'malformatted id'})
  }
})

module.exports = blogsRouter