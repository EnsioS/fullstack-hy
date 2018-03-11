import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import About from './components/About'
import Anecdote from './components/Anecdote'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: null
    } 
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ 
      anecdotes: this.state.anecdotes.concat(anecdote),
      notification: `a new anecdote ${anecdote.content} created`
    })
    setTimeout(() => {
      this.setState({ notification: null })
    }, 10000)
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => a.id === id)

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <div className="container">
        <h1>Software anecdotes</h1>
        <Router>
          <div>  
            <Menu />  
            <Notification message={this.state.notification} />
            <Route exact path="/" render={() => <AnecdoteList anecdotes={this.state.anecdotes} />} />     
            <Route exact path="/create" render={({history}) => 
              <CreateNew history={history} addNew={this.addNew} />} 
            />
            <Route exact path="/about" render={() => <About />} />

            <Route exact path="/anecdotes/:id" render={({match}) =>
              <Anecdote anecdote={this.anecdoteById(match.params.id)} />} 
            />  
          </div>
        </Router>  
        <Footer/>
      </div>
    )
  }
}

const menuStyle = {
  padding: '8px',
  border: '2px solid',
  borderRadius: '5px',
  marginTop: '5px',
  color: 'rgb(30,100,130)',
  backgroundColor: 'rgb(30,100,130)'
}

const menuLinkStyle = {
  color: 'white',
}

const activeStyle = {
  backgroundColor: 'grey',
  padding: '10px'
}

const Menu = () => (
  <div style={menuStyle}>    
    <NavLink to='/' activeStyle={activeStyle}><span style={menuLinkStyle}>anecdotes</span></NavLink>&nbsp;
    <NavLink to='/create' activeStyle={activeStyle}><span style={menuLinkStyle}>create new</span></NavLink>&nbsp;&nbsp;
    <NavLink to='/about' activeStyle={activeStyle}><span style={menuLinkStyle}>about</span></NavLink>&nbsp;
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code. 
  </div>
)

export default App
