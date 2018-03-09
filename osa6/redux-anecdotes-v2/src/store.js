import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import anectodeReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anectodeReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store