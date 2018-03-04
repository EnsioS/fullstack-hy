import React from 'react'
import PropTypes from 'prop-types'

const NewBlogForm = ({ newTitle, newAuthor, newUrl, addBlog, handleValueChange }) => {
    return (
        <div>      
          <h2>create new</h2>
          <form onSubmit={addBlog}>
            <div>
              title:
              <input 
                name="newTitle"
                value={newTitle}
                onChange={handleValueChange}
              />
            </div>
            <div>
              author:
              <input
                name="newAuthor"
                value={newAuthor}
                onChange={handleValueChange}
              />    
            </div>
            <div>
              url:
              <input
                name="newUrl"
                value={newUrl}
                onChange={handleValueChange}
              />    
            </div>
            <div>
              <button type="submit">create</button>
            </div>
          </form>
    </div>
    )   
}

NewBlogForm.propTypes = {
  newTitle: PropTypes.string.isRequired, 
  newAuthor: PropTypes.string.isRequired, 
  newUrl: PropTypes.string.isRequired, 
  addBlog: PropTypes.func.isRequired, 
  handleValueChange: PropTypes.func.isRequired,
}

export default NewBlogForm 