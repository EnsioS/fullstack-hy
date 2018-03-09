import anecdoteService from '../services/anecdotes'

const voting = (store, action) => {
  const old = store.filter(a => a.id !== action.anectode.id)
  console.log('updatedVoted', action.anectode)
  return [...old, action.anectode] 
}

const reducer = (store = [], action) => {
  switch (action.type) {
  case 'VOTE':
    return voting(store, action)
  case 'CREATE':
    return [...store, action.data]     
  case 'INIT_ANECDOTES':
    return action.data
  default:
    return store  
  }    
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const newAnecdote = anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote 
    })
  } 
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const voted = await anecdoteService.getAll().find(a => a.id === anecdote.id)
    const updatedVoted = await anecdoteService
      .update(voted.id, { ...voted, votes: voted.votes + 1 })

    dispatch(  {
      type: 'VOTE',
      anectode: updatedVoted
    })
  }

}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer