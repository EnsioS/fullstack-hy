import React from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const vote = (anecdote) => async () => {      
      this.props.voteAnecdote(anecdote)
      this.props.notify(`you voted '${anecdote.content}'`, 5)
    }    

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
  if (anecdotes.length === 0) {
    return []
  }
  console.log('filterAnectodes:')
  console.log(anecdotes)
  return anecdotes.filter(anecdote => anecdote.content.includes(filter))
} 

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log(state.anecdotes)
  return {
    anecdotesToShow: filteredAnecdotes(state.anecdotes, state.filter)
      .sort((a, b) => b.votes - a.votes)
  }
} 



export default connect(
  mapStateToProps,
  { voteAnecdote, notify }
)(AnecdoteList)
