import React from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const vote = (anecdote) => () => {
      return (
        this.props.voteAnecdote(anecdote.id),
        this.props.setNotification(`you voted '${anecdote.content}'`),
        setTimeout(() => {
          this.props.setNotification('')  
        }, 5000)
      )}    

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter/>
        {this.props.anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={vote(anecdote)}>  
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const filteredAnecdotes = (anecdotes, filter) => {
  return anecdotes.filter(anectode => anectode.content.includes(filter))
} 

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: filteredAnecdotes(state.anecdotes, state.filter)
      .sort((a, b) => b.votes - a.votes)
  }
} 

export default connect(
  mapStateToProps,
  { voteAnecdote, setNotification }
)(AnecdoteList)
