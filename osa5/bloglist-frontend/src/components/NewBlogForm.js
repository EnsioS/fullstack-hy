import React from 'react'

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

export default NewBlogForm 