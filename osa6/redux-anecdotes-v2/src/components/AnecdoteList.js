import React from 'react'
import PropTypes from 'prop-types'
import Filter from './Filter'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.context.store.getState().anecdotes
    const filter = this.context.store.getState().filter
    const filteredAnecdotes = anecdotes.filter(anectode => anectode.content.includes(filter))

    const vote = (anecdote) => () => {
      return (
        this.context.store.dispatch(voteAnecdote(anecdote.id)),
        this.context.store.dispatch(setNotification(`you voted '${anecdote.content}'`)),
        setTimeout(() => {
          this.context.store.dispatch(setNotification(''))  
        }, 5000)
      )}    

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter/>
        {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
