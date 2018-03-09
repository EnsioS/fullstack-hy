const notificationReducer = (state = '', action) => {
  if (action.type === 'SET_NOTIFICATION') {
    return action.content
  }
  return state
}

export const notify = (content, seconds) => {
  return async (dispatch) => {
    dispatch(  {
      type: 'SET_NOTIFICATION',
      content
    })
    setTimeout(() => {
      dispatch(  {
        type: 'SET_NOTIFICATION',
        content: ''
      })      
    }, seconds * 1000)
  }
}

export default notificationReducer