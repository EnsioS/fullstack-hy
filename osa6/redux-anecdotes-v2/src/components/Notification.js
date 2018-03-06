import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    const notification = this.context.store.getState().notification
    if (notification === '')
      return (
        <div></div>
      )
    else {    
      return (
        <div style={style}>
          {notification}
        </div>
      )
    }
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
