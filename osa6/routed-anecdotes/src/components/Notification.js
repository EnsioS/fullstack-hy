import React from 'react'

const notificationStyle = {
  color: 'rgb(25,75,50)',
  padding: '5px',
  border: '2px solid',
  borderRadius: '5px',
  marginTop: '5px',
  backgroundColor: 'rgb(175,225,150)'
}

const Notification = ({message}) => {
  if (message === null) {
    return <div></div>
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )      
}
 
export default Notification