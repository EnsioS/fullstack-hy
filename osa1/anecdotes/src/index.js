import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: 0
    }
  }

  randomAnecdote = (anecdotes) => {
    return () => {  
      const random = Math.floor(Math.random() * anecdotes.length)
      this.setState({ selected: random})
    }
  }

  vote = (anecdote) => {
    return () => {
      anecdote.votes += 1  
      console.log("anecdote.votes: " + anecdote.votes)  
      this.setState({ votes: anecdote.votes})
    }
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected].text} <br/> 
        has {this.props.anecdotes[this.state.selected].votes} votes <br/>
        <Button
          handleClick={this.vote(this.props.anecdotes[this.state.selected])}
          text="vote"
        />
        <Button 
          handleClick={this.randomAnecdote(this.props.anecdotes)}
          text="next anecdote"
        />
        <MostVotes anecdotes={this.props.anecdotes} />
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>     
      {text}
    </button>
  )

const MostVotes = ({ anecdotes }) => {
    const mostVoted = anecdotes.reduce( 
        (most, current) => current.votes > most.votes ? current : most, anecdotes[0] )     
    return (
        <div>
          <h3>anecdote with most votes:</h3>
          {mostVoted.text} <br/> 
          has {mostVoted.votes} votes
        </div>  
    )
}

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
    votes: 0
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    text: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {  
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }  
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
