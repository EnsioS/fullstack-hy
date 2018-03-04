import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('with out login only login form is shown', () => {
    app.update()
    const loginFormComponent = app.find(LoginForm)
    const blogComponents = app.find(Blog)

    expect(loginFormComponent.length).not.toEqual(0)
    expect(blogComponents.length).toEqual(0)
  })
})