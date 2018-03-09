const test = (store, action) => {
  const old = store.filter(a => a.id !== action.anectode.id)
  console.log('updatedVoted', action.anectode)
  return [...old, action.anectode] 
}

const reducer = (store = [], action) => {
  switch (action.type) {
  case 'VOTE':
    return test(store, action)
  case 'CREATE':
    return [...store, action.content]     
  case 'INIT_ANECDOTES':
    return action.data
  default:
    return store  
  }    
}

export const anecdoteCreation = (content) => {
  return {
    type: 'CREATE',
    content 
  }
}

export const voteAnecdote = (anectode) => {
  return { 
    type: 'VOTE',
    anectode: anectode 
  }
}

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export default reducer