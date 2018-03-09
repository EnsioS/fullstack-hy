import React from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {
  render() {
    const vote = (anecdote) => async () => {
      const voted = this.props.anecdotesToShow.find(a => a.id === anecdote.id)
      const updatedVoted = await anecdoteService
        .update(voted.id, { ...voted, votes: voted.votes + 1 })
      
      this.props.voteAnecdote(updatedVoted)
      this.props.setNotification(`you voted '${anecdote.content}'`)
      setTimeout(() => {
        this.props.setNotification('')  
      }, 5000)
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
  { voteAnecdote, setNotification }
)(AnecdoteList)
