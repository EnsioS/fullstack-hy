const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => { 
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.reduce(reducer , 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length < 1) {
    return null
  }

  const reducer = (favorite, blog) => {
    return blog.likes > favorite.likes ? blog : favorite
  }

  return blogs.reduce(reducer, blogs[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}