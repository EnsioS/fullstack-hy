import React from 'react'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import Togglable from './components/Togglable'
import NewBlogForm from './components/NewBlogForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      error: null,
      notification: null,
      username: '',
      password: '',
      user: null,
      newTitle: '',
      newAuthor: '',
      newUrl: ''
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      blogService.setToken(user.token)
    }
  } 

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password  /*haHaHaHahaa*/
      })

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user})
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    } 
  }

  logout = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    this.setState({ user: null })
  }

  addBlog = async (event) => {
    event.preventDefault()
    
    const blog = {
      title: this.state.newTitle,
      author: this.state.newAuthor,
      url: this.state.newUrl
    }

    try {
      const newBlog = await blogService.create(blog)

      const notification = `a new blog '${newBlog.title}' by ${newBlog.author} added`
      this.newBlogForm.toggleVisibility()

      this.setState({
        notification: notification,
        newTitle: '',
        newAuthor: '',
        newUrl: '',
        blogs: this.state.blogs.concat(newBlog)
      })

      setTimeout(() => {
        this.setState({ notification: null })
      }, 5000)
    } catch (exception) {
      console.log(exception)
    }

  }

  handleValueChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
      if (this.state.user === null) {
        return (
          <div>
            <Notification
              message={this.state.error}
              error={true}
            />
            <LoginForm
              login={this.login}
              username={this.state.username}
              password={this.state.password}
              handleValueChange={this.handleValueChange}
            />
          </div>
        )
      }

      return (
      <div>
        <Notification
          message={this.state.notification}
          error={false}
        />
        <h2>blogs</h2>
        <p>
          {this.state.user.name} logged in 
          <button onClick={this.logout}>logout</button>
        </p>
        <Togglable buttonLabel="new blog" ref={component => this.newBlogForm = component}>
          <NewBlogForm
            newTitle={this.state.newTitle}
            newAuthor={this.state.newAuthor}
            newUrl={this.state.newUrl}
            addBlog={this.addBlog}
            handleValueChange={this.handleValueChange}
          />
        </Togglable>
        {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog}/>
        )}
      </div>
    )
  }
}

export default App
