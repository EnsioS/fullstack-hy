import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('it renders tilte, author and likes of a blog', () => {
    const blog = {
      title: 'Continous Integration',
      author: 'Martin Flower',
      likes: 4
    }

    const blogComponent = shallow(
      <SimpleBlog
        blog={blog}
      />
    )
    const contentDiv = blogComponent.find('.content')
    const likes = blogComponent.find('.likes')

    expect(contentDiv.text()).toContain(blog.title)
    expect(contentDiv.text()).toContain(blog.author)
    expect(likes.text()).toContain(blog.likes) 
  })

  it.only('clicking button twice calls event handler twice', () => {
    const blog = {
        title: 'Continous Integration',
        author: 'Martin Flower',
        likes: 4
      }
  
      const mockHandler = jest.fn()
  
      const blogComponent = shallow(
        <SimpleBlog
          blog={blog}
          onClick={mockHandler}
        />
      )

      const button = blogComponent.find('button')
      button.simulate('click')
      button.simulate('click')

      expect(mockHandler.mock.calls.length).toBe(2)
  })

})