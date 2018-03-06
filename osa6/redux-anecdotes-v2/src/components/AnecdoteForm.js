import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.anecdoteCreation(e.target.anecdote.value)
    this.props.setNotification(`created anectode '${e.target.anecdote.value}'`)
    setTimeout(() => {
      this.props.setNotification('')  
    }, 5000)
    e.target.anecdote.value = ''
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { anecdoteCreation, setNotification }
)(AnecdoteForm)
