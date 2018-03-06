import { createStore, combineReducers } from 'redux'
import anectodeReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anectodeReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)

export default store