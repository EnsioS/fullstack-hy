const notificationReducer = (state = '', action) => {
  if (action.type === 'SET_NOTIFICATION') {
    return action.content
  }
  return state
}

export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    content
  }
}

export default notificationReducer