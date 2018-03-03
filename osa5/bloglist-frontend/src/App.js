import React from 'react'
import Blog from './components/Blog'
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
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  } 

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password  /*haHaHaHahaa */
      })

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
        <h2>blogs</h2>
        
        <p>{this.state.user.name} logged in</p>

        {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog}/>
        )}
      </div>
    )
  }
}

const LoginForm = ({ login, username, password, handleValueChange }) => (
  <div>
    <h2>Kirjaudu</h2>

    <form onSubmit={login}>
      <div>
        käyttäjätunnus
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleValueChange}
        />
      </div>
      <div>
        salasana
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleValueChange}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>
  </div>
)


export default App;
